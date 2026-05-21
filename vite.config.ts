import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        drainageLymphatic: "tratamentos/drenagem-linfatica-guimaraes/index.html",
        postoperativeDrainage: "tratamentos/drenagem-pos-operatorio-guimaraes/index.html",
      },
    },
  },
});
