import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import ObjFileImport from "unplugin-obj/vite";

export default defineConfig({
  plugins: [glsl(), ObjFileImport()],
});
