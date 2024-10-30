import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), sitemap()],
	site: `https://wilderolmos.com`,
	output: 'static',
	outDir: './docs',
	build: {
		assets: 'astro'
	}
});
