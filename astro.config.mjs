// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://exyuiptv.org',
  output: 'static',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  integrations: [
    react(),
    sitemap(),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
