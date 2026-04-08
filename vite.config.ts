import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "@react-three/postprocessing",
      "@react-three/rapier",
      "gsap",
      "gsap/ScrollTrigger",
      "gsap-trial/ScrollSmoother",
      "three-stdlib"
    ],
  },
});
