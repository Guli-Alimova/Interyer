import {createRouter, createWebHistory} from "vue-router"
import index from "@/pages/index"

const routes = [
    {
        path:"/",
        component:index
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router