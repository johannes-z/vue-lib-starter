import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
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
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    resolve(),
    commonjs(),
    typescript(baseConfig.plugins.typescript),
    babel({
      ...baseConfig.plugins.babel,
      configFile: false,
      presets: [
        ['@vue/cli-plugin-babel/preset', {
          modules: false,
          useBuiltIns: false,
          polyfills: [],
        }],
      ],
      runtimeHelpers: true,
    }),
  ],
}
