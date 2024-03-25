import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  base:'/IQ-MINDS/'
});
