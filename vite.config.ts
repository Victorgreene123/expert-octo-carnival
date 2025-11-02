import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
   server: {
    allowedHosts: [
      "nonreflected-cursively-rosendo.ngrok-free.dev"
    ],
    host: true, // this ensures it listens on all interfaces
  },
  plugins: [react(), tsconfigPaths()],
});


