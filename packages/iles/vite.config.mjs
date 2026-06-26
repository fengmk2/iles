import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  pack: {
    entry: ['src/node/index.ts', 'src/node/cli.ts'],
    target: 'node20',
    outDir: 'dist/node',
    // vite-plus is a devDependency, so the dts bundler would otherwise try to
    // inline its types, which reference postcss/esbuild CommonJS declarations
    // that rolldown-plugin-dts cannot bundle. Keep it external.
    external: ['vite-plus'],
  },
})
