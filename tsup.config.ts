import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  external: ["@permaweb/aoconnect"],
  treeshake: true,
  outExtension({ format }) {
    const ext = format === "cjs" ? ".cjs" : ".js";
    return {
      js: options.watch ? `.development${ext}` : ext,
    };
  },
  define: {
    "process.env.NODE_ENV": options.watch ? '"development"' : '"production"',
  },
}));
