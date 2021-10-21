import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: "preconnect",
        href: "https://rsms.me/",
      },
      {
        rel: "stylesheet",
        href: "https://rsms.me/inter/inter.css",
      },
    ],
  },
  buildModules: ["nuxt-windicss"],
  windicss: {
    analyze: true,
  },
});