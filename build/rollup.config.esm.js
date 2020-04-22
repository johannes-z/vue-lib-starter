import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// @ts-ignore
import babel from 'rollup-plugin-babel'
import { baseConfig } from './rollup.config.base'
import pkg from '../package.json'

export default {
  ...baseConfig,
  // external: [
  //   /id/,
  //   'id2',
  // ],
  output: {
    file: pkg.module,
    format: 'esm',
  },
  inlineDynamicImports: true,
  plugins: [
    // ...baseConfig.plugins.preVue,
    // vue(baseConfig.plugins.vue),
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      preferBuiltins: true,
    }),
    commonjs({
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      include: /node_modules/,
      sourceMap: false,
    }),
    // typescript(baseConfig.plugins.typescript),
    babel({
      ...baseConfig.plugins.babel,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      babelrc: false,
      configFile: false,
      presets: [
        ['@babel/preset-typescript', {}],
        ['@vue/cli-plugin-babel/preset', {
          modules: false,
          useBuiltIns: false,
          polyfills: [],
        }],
      ],
    }),
  ],
}
