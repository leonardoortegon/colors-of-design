"""Check the built site's links, images, metadata, landmarks, sitemap, and redirects."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
errors = []

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path = path
        self.ids = set()
        self.links = []
        self.images = []
        self.h1 = self.main = 0
        self.canonical = self.description = self.title = ''
        self.capture = None
        self.buffer = ''
        self.redirect = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get('id'):
            if a['id'] in self.ids: errors.append(f'{self.path}: duplicate id {a["id"]}')
            self.ids.add(a['id'])
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if tag == 'meta':
            if a.get('name') == 'description': self.description = a.get('content', '')
            if a.get('http-equiv', '').lower() == 'refresh': self.redirect = True
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical = a.get('href', '')
        if tag == 'a': self.links.append(a.get('href', ''))
        if tag == 'img':
            self.images.append(a.get('src', ''))
            if not a.get('alt'): errors.append(f'{self.path}: image without descriptive alt')
        if tag == 'title' or (tag == 'script' and a.get('type') == 'application/ld+json'):
            self.capture = tag
            self.buffer = ''

    def handle_data(self, data):
        if self.capture: self.buffer += data

    def handle_endtag(self, tag):
        if tag != self.capture: return
        if tag == 'title': self.title = self.buffer
        if tag == 'script':
            try: json.loads(self.buffer)
            except ValueError: errors.append(f'{self.path}: invalid JSON-LD')
        self.capture = None

pages = {p: Page(p) for p in DIST.rglob('*.html')}
titles = set()
canonicals = set()
for path, page in pages.items():
    if page.redirect: continue
    for condition, message in [
        (page.h1 == 1, 'expected one H1'), (page.main == 1, 'expected one main'),
        (bool(page.title), 'missing title'), (bool(page.description), 'missing description'),
        (page.canonical.startswith('https://colorsofdesign.com/'), 'wrong canonical domain'),
        (page.title not in titles, 'duplicate title'), (page.canonical not in canonicals, 'duplicate canonical')
    ]:
        if not condition: errors.append(f'{path}: {message}')
    titles.add(page.title)
    canonicals.add(page.canonical)
    for href in page.links + page.images:
        if not href or href == '#':
            errors.append(f'{path}: empty destination'); continue
        url = urlsplit(href)
        if url.scheme or url.netloc: continue
        if url.path.startswith('/'):
            target = DIST / unquote(url.path.lstrip('/'))
        elif not url.path: target = path
        else: target = path.parent / unquote(url.path)
        if target.is_dir(): target = target / 'index.html'
        if not target.exists(): errors.append(f'{path}: missing target {href}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{path}: missing anchor {href}')

redirects = json.loads((ROOT/'src/data/redirects.json').read_text())
vercel = json.loads((ROOT/'vercel.json').read_text())
vercel_static = {r['source']: r['destination'] for r in vercel['redirects'] if ':' not in r['source']}
if vercel_static != redirects:
    errors.append(f'Redirect mismatch between vercel.json and redirects.json: {set(vercel_static.items()) ^ set(redirects.items())}')
for source, target in redirects.items():
    if urlsplit(target).scheme in ('http', 'https'):
        continue
    dest = DIST/target.strip('/')/'index.html'
    if not dest.exists(): errors.append(f'{source}: missing redirect target {target}')
    if target.rstrip('/') in redirects: errors.append(f'{source}: redirect chain')

sitemap = ET.parse(DIST/'sitemap.xml')
listed = {e.text for e in sitemap.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')}
expected = {p.canonical for path,p in pages.items() if not p.redirect and path.name != '404.html'}
if listed != expected: errors.append(f'Sitemap mismatch: {listed ^ expected}')
if errors:
    print('\n'.join(errors))
    raise SystemExit(1)
print(f'PASS: {len(expected)} indexable pages; links, anchors, images, metadata, JSON-LD, sitemap, and {len(redirects)} redirects checked.')
