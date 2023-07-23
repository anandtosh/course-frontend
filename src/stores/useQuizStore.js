import { create, createStore } from "zustand";
import { persist } from "zustand/middleware"

const initValues = {
    quiz: null,
    cqIndex: -1,
    question: null,
    unlocked: [],
    selected: [],
    timeRemaining: 0
}

let quizStore = (set, get) => ({
    ...initValues,
    setQuiz: (quiz) => set((state) => ({ ...state, quiz: quiz })),
    setTimeRemaining: (seconds) => set((state) => ({ ...state, timeRemaining: seconds })),
    setCqIndex: (cqIndex) => set((state) => ({ ...state, cqIndex: cqIndex })),
    setQuestion: (question) => set((state) => ({ ...state, question: question })),
    addUnlocked: (id) => set((state) => ({ ...state, unlocked: state.unlocked.includes(id) ? [...state.unlocked] : [...state.unlocked, id] })),
    addSelected: (id, answer) => set((state) => {
        const existingIndex = state.selected.findIndex((element) => element.id === id);

        if (existingIndex !== -1) {
            // If the ID exists, create a new array with the updated answer
            const updatedSelected = state.selected.map((element) =>
                element.id === id ? { id: id, answer: answer } : element
            );
            return { ...state, selected: updatedSelected };
        } else {
            // If the ID does not exist, add a new entry
            return { ...state, selected: [...state.selected, { id: id, answer: answer }] };
        }
    }),
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