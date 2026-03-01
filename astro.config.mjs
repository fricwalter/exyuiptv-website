// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://exyuiptv.org',
  output: 'static',
  integrations: [
    react(),
    sitemap(),
    mdx()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
