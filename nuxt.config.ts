import { defineNuxtConfig } from "nuxt3";
const description = "A community-built compatibility guide for Nuxt 3 modules";
const title = "Is Nuxt 3 Ready?";
const url = "https://isnuxt3ready.owln.ai/";
const ogImage = "https://isnuxt3ready.owln.ai/og.png";

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
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:url",
        content: url,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: ogImage,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:domain",
        content: url.split("/")[2],
      },
      {
        property: "twitter:url",
        content: url,
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
    ],
  },
  buildModules: ["nuxt-windicss"],
});
