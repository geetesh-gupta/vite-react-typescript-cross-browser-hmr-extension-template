import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension from "@samrum/vite-plugin-web-extension";
import path from "path";
import { getManifest } from "./src/manifest";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const manifestVersion = Number(process.env.MANIFEST_VERSION ?? 3);

  return {
    build: {
      outDir: `${process.env.OUT_DIR ?? "dist"}/v${manifestVersion}`
    },
    plugins: [
      react(),
      webExtension({
        manifest: getManifest(manifestVersion),
      }),
    ],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  };
});

