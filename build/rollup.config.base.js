import path from 'path'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export const baseConfig = {
  input: 'src/main.ts',
  plugins: {
    preVue: [
      json(),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        entries: {
          '@': path.resolve(
            path.resolve(__dirname, '..'),
            'src',
          ),
        },
      }),
      resolve({
        browser: true,
        jsnext: true,
        preferBuiltins: true,
      }),
      commonjs({
        include: /node_modules/,
      }),
    ],
    vue: {
      css: true,
      template: {
        isProduction: true,
      },
    },
    typescript: {
      abortOnError: false,
      typescript: require('typescript'),
      useTsconfigDeclarationDir: true,
      // clean: true,
    },
    babel: {
      exclude: /node_modules/,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      plugins: [],
    },
  },
}
