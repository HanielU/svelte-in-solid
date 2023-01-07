import solidPlugin from "vite-plugin-solid";
import type { UserConfig } from "vite";
import unocss from "unocss/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const config: UserConfig = {
  plugins: [unocss(), solidPlugin(), svelte()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },

  resolve: {
    alias: {
      "~": "/src",
    },
  },
};

export default config;
