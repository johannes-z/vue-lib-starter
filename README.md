# vue-lib-starter
A scaffolding template using `@vue/cli` for development and browser bundels, and `rollup` for esm builds to be used by
consuming apps.

## Caveats
* Code-splitting is not supported for `UMD` builds.

## :warning:
As of today `rollup-plugin-vue` and `@babel/plugin-transform-runtime` resolve path's wrongly breaking the rollup build.
For `rollup-plugin-vue` you can downgrade to an older version. For `@babel/plugin-transform-runtime` check this
[PR](https://github.com/babel/babel/pull/11366).

```json
{
  "rollup-plugin-vue": "^5.1.6",
  "rollup-plugin-vue": "5.1.1"
}
```

