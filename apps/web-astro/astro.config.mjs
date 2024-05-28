import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), mdx()],
  ...process.env.ASTRO_SSR && {
    output: "server",
    adapter: node({
      mode: "standalone"
    })
  }
});
