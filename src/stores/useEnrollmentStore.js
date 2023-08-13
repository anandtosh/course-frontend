import { create } from "zustand";
import { persist } from "zustand/middleware"

const initValues = {
    enrollment: null,
}

let enrollmentStore = (set, get) => ({
    ...initValues,
    setEnrollment: (enrollment) => set((state) => ({ ...state, enrollment: enrollment })),
})

enrollmentStore = persist(enrollmentStore, { name: "fols_enrollment" })

const useEnrollmentStore = create(enrollmentStore)

export { useEnrollmentStore }