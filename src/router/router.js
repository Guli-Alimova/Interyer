import {createRouter, createWebHistory} from "vue-router"
import index from "@/pages/index"
import About from "@/pages/About.vue"
import Services from "@/pages/Services.vue"
import Pages from "@/pages/Pages.vue"
import Contact from "@/pages/Contact.vue"

const routes = [
    {
        path:"/",
        component:index
    },
    {
        path:"/about",
        component:About
    },
    {
        path:"/services",
        component:Services
    },
    {
        path:"/pages",
        component:Pages
    },
    {
        path:"/contact",
        component:Contact
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router