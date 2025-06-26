import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todolists: [],
};

const todolistSlice = createSlice({
  name: "Todolist",
  initialState,
  reducers: {
    addTodoList: (state, action) => {
      state.todolists.push(action.payload);
    },
    removeTodoList: (state, action) => {
      state.todolists = state.todolists.filter(
        (todolist) => todolist.id !== action.payload.id
      );
    },
    updateTodoList: (state, action) => {
      const index = state.todolists.findIndex(
        (todolist) => todolist.id === action.payload.id
      );
      if (index !== -1) {
        state.todolists[index] = action.payload;
      }
    },
    setDone: (state, action) => {
      const index = state.todolists.findIndex(
        (todolist) => todolist.id === action.payload.id
      );
      if (index !== -1) {
        state.todolists[index].done = action.payload.done;
      }
    },
  },
});

export const todolistActions = todolistSlice.actions;
export default todolistSlice.reducer;
