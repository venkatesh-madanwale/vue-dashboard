import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: "",
        user: null as null | {
            msg: string,
            _id: string,
            email: string,
            name: string,
            role: string,
            token: string
        }
    }),

    actions: {
        setToken(token: string) {
            this.token = token;
        },

        setUser(user: { msg: string, _id: string, email: string, name: string, role: string, token: string }) {
            this.user = user;
        },

        logout() {
            this.token = "";
            this.user = null;
        }
    }
})