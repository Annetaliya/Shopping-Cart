import { createSlice, nanoid } from "@reduxjs/toolkit";

const initalState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initalState,
    reducers:{
        addTodo:(state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }

        }
    }
})