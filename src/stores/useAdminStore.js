import { create } from "zustand";
import { persist } from "zustand/middleware"

const initValues = {
    token: null,
    course: null
}

let adminStore = (set) => ({
    ...initValues,
    setToken: (token) => set((state) => ({ ...state, token: token })),
    setCourse: (course) => set((state) => ({ ...state, course: course })),
    resetAuth: () => set((state) => ({...initValues}))
})

adminStore = persist(adminStore,{name :"fols_auth_admin"})

const useAdminStore =create(adminStore)

export {useAdminStore}