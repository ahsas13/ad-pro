import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM9eIsWH-690AzrhP7KKxpym8dE0ZtTfo",
  authDomain: "ad-pro-14816.firebaseapp.com",
  projectId: "ad-pro-14816",
  storageBucket: "ad-pro-14816.appspot.com",
  messagingSenderId: "42083426722",
  appId: "1:42083426722:web:20324462598e42a1b992fb",
  measurementId: "G-JPB7L4Z34Y"
};$mount('#app')