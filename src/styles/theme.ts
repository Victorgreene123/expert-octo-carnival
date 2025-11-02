import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: "#FC9807" },
        },
        secondary: {
          DEFAULT: { value: "#283582" },
        },
        tertiary: {
          DEFAULT: { value: "#201503" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
