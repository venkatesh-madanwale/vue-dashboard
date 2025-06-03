import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import { useAuthStore } from "../stores/auth";

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
    }
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