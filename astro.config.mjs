import netlify from '@astrojs/netlify/static';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://iamjaymcbride.com/', // Replace with your site's URL
	output: 'static',
	integrations: [tailwind(), sitemap()],
	adapter: netlify(),
});
