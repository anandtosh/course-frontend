import { create, createStore } from "zustand";
import { persist } from "zustand/middleware"


let themeStore = (set) => ({
    theme: 'light',
    invertTheme: () => set((state) => ({ theme: (state.theme === 'dark' ? 'light' : 'dark' ) })),
})

themeStore = persist(themeStore,{name :"active_theme"})

const useThemeStore =create(themeStore)

export {useThemeStore}