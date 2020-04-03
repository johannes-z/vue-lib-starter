import Vue from 'vue'
import App from './App.vue'

import pkg from '../package.json'

export {
  App,
}

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-new
  new Vue({
    el: '#app',
    render: h => h(App),
  })
}

console.log(`${pkg.name} - v${pkg.version}`)
