import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        nuxt: {
          grass: "#00DC82",
          valley: "#00A963",
          mountain: "#098466",
          cliff: "#012A35",
          space: "#003543",
        },
      },
      fontFamily: {
        sans: "Inter var, Inter, sans-serif",
      },
    },
  },
  plugins: [require("windicss/plugin/forms")],
});
