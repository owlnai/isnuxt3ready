import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        nuxt: {
          light: "#00DC82",
          mountain: "#098466",
          darkest: "#012A35",
          dark: "#003543",
        },
      },
      fontFamily: {
        sans: "Inter var, Inter, sans-serif",
      },
    },
  },
});
