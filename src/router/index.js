import { createRouter, createWebHistory } from 'vue-router'

import HelpComponent from "@/views/HelpComponent.vue";
import homeView from "@/views/HomeView.vue";
import singUp from "@/views/singUp.vue";
import reGister from "@/views/reGister.vue";

const routes = [
    {
        // navigacia medzi strankami metreba importovat potom
        path: '/',
        name: 'home',
        component: homeView
    },
    {
        path:'/help',
        name:'help',
        component: HelpComponent,
    },
    {
        path:'/singUp',
        name:'singUp',
        component: singUp,
    },
    {
        path:'/register',
        name:'reGister',
        component: reGister,
    }

]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router