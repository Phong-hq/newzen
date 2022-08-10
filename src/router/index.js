import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: "/",
        redirect: "home",
        component: () => import("../layout/Layout.vue"),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import("../home/Home.vue")
            },
            {
                path: '/web-hosting',
                name: 'web-hosting',
                component: () => import("../web-hosting/WebHosting.vue")
            },
            {
                path: '/email',
                name: 'email',
                component: () => import("../email/Email.vue")
            }
        ]
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router