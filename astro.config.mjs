// @ts-check
import { defineConfig } from 'astro/config';
import redirects from './src/data/redirects.json';

// https://astro.build/config
export default defineConfig({
	site: 'https://colorsofdesign.com',
	redirects,
	devToolbar: { enabled: false },
});
