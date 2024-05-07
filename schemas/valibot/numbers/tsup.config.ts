import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/index.ts'],
  clean: true,
  format: ['esm', 'cjs'],
  minify: false,
  dts: true,
  splitting: true,
  outDir: './dist'
})
