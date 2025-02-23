import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'rollup';

import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync('./package.json'));

export default defineConfig([
  {
    input: 'index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        plugins: [
          tailwindcss(),
          autoprefixer(),
        ],
        minimize: true,
        modules: true,
        extract: false,
      }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'index.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  },
])