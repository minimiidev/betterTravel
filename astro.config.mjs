// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [sanity(
    {
      projectId: 'oajovp2j',
      dataset: 'production',
      // Set useCdn to false if you're building statically.
      useCdn: true, // VER???
      studioBasePath: "/admin"
    }
  ), react(), tailwind()],

  output: "server",
  adapter: vercel(),

  vite: {
    ssr: {
      noExternal: ['resend'],
    },
  },
});