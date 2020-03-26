import Vue from 'vue'
import './setup'
import App from './App.vue'

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
