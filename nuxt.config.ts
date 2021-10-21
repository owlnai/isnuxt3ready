import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: ["nuxt-windicss"],
  windicss: {
    analyze: true,
  },
});
