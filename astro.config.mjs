// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';


import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
  site: 'https://www.bettertravelrd.com/',
  integrations: [sanity(
    {
      projectId: 'oajovp2j',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: true, // VER???
      studioBasePath: "/admin"
    }
  ), react(), tailwind(), sitemap({
    filter: (page) => page !== 'https://www.bettertravelrd.com/reservas',
  })],

  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  vite: {
    ssr: {
      noExternal: ['resend'],
    },
  },
});