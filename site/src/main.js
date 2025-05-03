import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import IndexSite from './components/IndexSite.vue'
import ContactSite from './components/ContactSite.vue'


Vue.use(VueRouter)
Vue.use(Vuetify)

const vuetify = new Vuetify()

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexSite
    },
    {
      path: '/contact',
      component: ContactSite
    },
]
})

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
