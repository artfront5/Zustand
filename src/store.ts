import create from "zustand";
import { v4 as uuidv4 } from "uuid";

interface useStore {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export const useCount = create<useStore>((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}));

export interface Todo {
    userId?: number;
    id: number | string;
    title: string;
    completed?: boolean;
}
export type TodoStore = {
    todos: Todo[];
    newTodo: string;
    addTodo: () => void;
    setNewTodo: (title: string) => void;
    removeTodo: (id: number | string) => void;
    load: () => void;
};

const addTodo = (todos: Todo[], title: string): Todo[] => [
    ...todos,
    {
        id: uuidv4(),
        title,
    },
];

const removeTodo = (todos: Todo[], id: number | string): Todo[] =>
    todos.filter((todo) => todo.id !== id);

export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [],
    newTodo: "",
    load: async () => {
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=3"
        );
        const json = (await result.json()) as Todo[];
        set({ todos: json });
    },
    addTodo() {
        set((state) => ({
            ...state,
            todos: addTodo(state.todos, state.newTodo),
            newTodo: "",
        }));
    },
    setNewTodo(title: string) {
        set((state) => ({
            ...state,
            newTodo: title,
        }));
    },
    removeTodo(id: number | string) {
        set((state) => ({
            ...state,
            todos: removeTodo(state.todos, id),
        }));
    },
}));
