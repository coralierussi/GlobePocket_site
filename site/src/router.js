import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter ({
    routes :[
        {
            path: '/ContactSite',
            name :'ContactSite',
            component: () => import("@/components/ContactSite.vue")
        },
        {
            path: '/ConnectionSite',
            name :'ConnectionSite',
            component: () => import("@/components/ConnectionSite.vue")
        }
    ]
})