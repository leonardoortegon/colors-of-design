"""Verify that every archived legacy URL resolves to a page or a Vercel redirect."""

from pathlib import Path
from urllib.parse import urlsplit
import json
import re


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
LEGACY_URLS = ROOT / "docs" / "legacy-urls.txt"


def normalize(path: str) -> str:
    path = "/" + path.strip("/")
    return "/" if path == "/" else path


def built_page_exists(path: str) -> bool:
    normalized = normalize(path)
    if normalized == "/":
        return (DIST / "index.html").exists()
    return (DIST / normalized.lstrip("/") / "index.html").exists()


def source_pattern(source: str) -> re.Pattern[str]:
    parts = normalize(source).strip("/").split("/")
    if parts[-1].startswith(":") and parts[-1].endswith("*"):
        base = "/".join(re.escape(part) for part in parts[:-1])
        return re.compile(r"^/" + base + r"(?:/.*)?/?$")
    regex_parts = []
    for part in parts:
        if part.startswith(":"):
            regex_parts.append(r"[^/]+")
        else:
            regex_parts.append(re.escape(part))
    return re.compile(r"^/" + "/".join(regex_parts) + r"/?$")


def main() -> None:
    if not DIST.exists():
        raise SystemExit("dist/ is missing; run npm run build first")

    config = json.loads((ROOT / "vercel.json").read_text())
    redirects = config.get("redirects", [])
    compiled = [(source_pattern(item["source"]), item) for item in redirects]
    failures = []
    covered_by_page = 0
    covered_by_redirect = 0

    urls = [
        line.strip()
        for line in LEGACY_URLS.read_text().splitlines()
        if line.strip() and not line.startswith("#")
    ]

    for url in urls:
        path = normalize(urlsplit(url).path)
        match = next((item for pattern, item in compiled if pattern.match(path)), None)
        if match is not None:
            destination = match["destination"]
            if ":" in destination:
                failures.append(f"redirect destination cannot be verified: {path} -> {destination}")
            elif not built_page_exists(destination):
                failures.append(f"missing redirect destination: {path} -> {destination}")
            else:
                covered_by_redirect += 1
        elif built_page_exists(path):
            covered_by_page += 1
        else:
            failures.append(f"uncovered legacy URL: {url}")

    if failures:
        print("\n".join(failures))
        raise SystemExit(1)

    print(
        f"PASS: {len(urls)} legacy URLs covered "
        f"({covered_by_page} current pages, {covered_by_redirect} redirects)."
    )


if __name__ == "__main__":
    main()
