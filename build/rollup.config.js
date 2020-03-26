import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
// @ts-ignore
import babel from 'rollup-plugin-babel'
import pkg from '../package.json'
import { baseConfig } from './rollup.config.base'

const buildFormats = []

const esConfig = {
  ...baseConfig,
  // external: id => /node_modules/.test(id) || Object.keys(pkg.dependencies).indexOf(id) > -1,
  output: {
    dir: 'lib',
    // file: 'dist/test.esm.js',
    format: 'esm',
  },
  preserveModules: true,
  plugins: [
    ...baseConfig.plugins.preVue,
    vue(baseConfig.plugins.vue),
    typescript(baseConfig.plugins.typescript),
    babel({
      ...baseConfig.plugins.babel,
      presets: [
        [
          '@vue/cli-plugin-babel/preset',
          {
            // corejs: 3,
            // useBuiltIns: 'usage',
            corejs: false,
            useBuiltIns: false,
            polyfills: false,
          },
        ],
      ],
      runtimeHelpers: true,
    }),
    resolve(),
    commonjs(),
  ],
}
buildFormats.push(esConfig)

// Export config
export default buildFormats
