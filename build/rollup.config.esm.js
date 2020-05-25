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
  external: Object.keys(pkg.dependencies),
  output: {
    file: pkg.module,
    format: 'esm',
  },
  inlineDynamicImports: true,
  plugins: [
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    resolve({
      browser: true,
      jsnext: true,
      preferBuiltins: true,
    }),
    commonjs({
      include: /node_modules/,
    }),
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
