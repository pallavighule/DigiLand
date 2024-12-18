import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import deno from '@deno/astro-adapter';
import react from "@astrojs/react";

export default defineConfig({
  output: 'server',
  integrations: [
    react(),
    tailwind(),
  ],
  adapter: deno(),
  build: {
  },
});