import 'es6-promise/auto'
import { app, store } from './app'

store.replaceState(window.__INITIAL_STATE__)
app.$mount('#app')
