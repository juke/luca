// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://juke.github.io',
  base: '/luca',
  integrations: [tailwind()],
});