import { defineConfig } from "tsup"

export default defineConfig({
  clean: true,
  format: ["esm", "cjs"],
  target: "es2019",
  esbuildOptions(options, context) {
    options.jsx = "automatic"
  },
})
