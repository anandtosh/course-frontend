import { create } from "zustand";
import { persist } from "zustand/middleware"

const initValues = {
    token: null,
    user: null,
}

let authStore = (set) => ({
    ...initValues,
    setToken: (token) => set((state) => ({ ...state, token: token })),
    setUser: (user)=> set((state) => ({...state,user:user})),
    resetAuth: () => set((state) => ({...initValues}))
})

authStore = persist(authStore,{name :"fols_auth"})

const useAuthStore =create(authStore)

export {useAuthStore}