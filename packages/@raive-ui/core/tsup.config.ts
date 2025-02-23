import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['react', 'styled-components'],
  clean: true,
  treeshake: true,
  tsconfig: 'tsconfig.json'
});