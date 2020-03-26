import path from 'path'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'

const projectRoot = path.resolve(__dirname, '..')

export const baseConfig = {
  input: 'src/main.ts',
  plugins: {
    preVue: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      alias({
        resolve: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
        entries: {
          '@': path.resolve(projectRoot, 'src'),
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
      verbosity: 2,
    },
    babel: {
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      plugins: [ ],
    },
  },
}
