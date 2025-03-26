import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter ({
    routes :[
        {
            path: '/ContactSite',
            name :'ContactSite',
            component: () => import("@/components/ContactSite.vue")
        }
    ]
})