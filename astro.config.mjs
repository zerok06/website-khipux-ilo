import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://khipux.ilo.pe',
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  },

  integrations: [react(), sitemap()]
});