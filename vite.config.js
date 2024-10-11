import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    VITE_OPENCAGEDATA_API_KEY: import.meta.env.VITE_OPENCAGEDATA_API_KEY,
  },
});
