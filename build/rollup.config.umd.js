import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
// @ts-ignore
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import { baseConfig } from './rollup.config.base'
import pkg from '../package.json'

import fs from 'fs'

const browserslist = fs.readFileSync('.browserslistrc')
  .toString()
  .replace(/\r/g, '')
  .split('\n')

/**
 * @vue/cli-plugin-babel/preset excludes certain polyfills when VUE_CLI_BUILD_TARGET is not set.
 * See https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills
 */
process.env.VUE_CLI_BUILD_TARGET = 'lib'

export default {
  ...baseConfig,
  external: [
    // 'vue',
  ],
  output: {
    name: pkg.name,
    file: pkg.browser,
    format: 'umd',
    globals: {
      vue: 'Vue',
    },
  },
  plugins: [
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    typescript(baseConfig.plugins.typescript),
    babel({
      ...baseConfig.plugins.babel,
      configFile: false,
      presets: [
        ['@vue/cli-plugin-babel/preset', {
          corejs: 3,
          useBuiltIns: 'usage',
          ignoreBrowserslistConfig: false,
          targets: {
            browsers: browserslist,
          },
        }],
      ],
      runtimeHelpers: true,
    }),
    terser(),
  ],
}
