// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://exyuiptv.org',
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  integrations: [
    sitemap(),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
