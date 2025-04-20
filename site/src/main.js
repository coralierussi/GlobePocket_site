import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import IndexSite from './components/IndexSite.vue'
import ContactSite from './components/ContactSite.vue'


Vue.use(VueRouter)

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
  router,
  render: h => h(App)
}).$mount('#app')
