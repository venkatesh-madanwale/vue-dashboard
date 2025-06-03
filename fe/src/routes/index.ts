import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import { useAuthStore } from "../stores/auth";
import HelpFAQ from "../components/layout/HelpFAQ.vue";
import ReleaseNotes from "../components/layout/ReleaseNotes.vue";
import Setting from "../components/layout/Setting.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/helpfaq",
        name: "HelpFAQ",
        component: HelpFAQ,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/releasenotes",
        name: "ReleaseNotes",
        component: ReleaseNotes,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/setting",
        name: "Setting",
        component: Setting,
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({ history: createWebHistory(), routes })
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    if (to.meta.requiresAuth && !authStore.token) {
        next('/login')
    }
    else {
        next()
    }
})
export default router