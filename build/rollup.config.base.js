import path from 'path'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import json from '@rollup/plugin-json'

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
          '@/': path.resolve(
            path.resolve(__dirname, '..'),
            'src/'
          ),
        },
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
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      plugins: [ ],
    },
  },
}
