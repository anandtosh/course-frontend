import { create, createStore } from "zustand";
import { persist } from "zustand/middleware"

const initValues = {
    quiz: null,
    cqIndex: -1,
    question: null,
    unlocked: [],
    selected: []
}

let quizStore = (set, get) => ({
    ...initValues,
    setQuiz: (quiz) => set((state) => ({ ...state, quiz: quiz })),
    setCqIndex: (cqIndex) => set((state) => ({ ...state, cqIndex: cqIndex })),
    setQuestion: (question) => set((state) => ({ ...state, question: question })),
    addUnlocked: (id) => set((state) => ({ ...state, unlocked: [...state.unlocked, id] })),
    addSelected: (id, answer) => set((state) => ({ ...state, selected: [...state.selected, { id: id, answer: answer }] })),
    removeSelected: (id) => set((state) => {
        let arr = state.selected.filter((element) => element.id !== id);
        return { ...state, selected: arr };
    }),
    isSelected: (id) => {
        const state = get();
        return state.selected.some((element) => element.id === id);
    }
})

quizStore = persist(quizStore, { name: "fols_quiz" })

const useQuizStore = create(quizStore)

export { useQuizStore }