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
        (todo) => todo.id !== action.payload.id
      );
    },
    updateTodoList: (state, action) => {
      const { id, title, done } = action.payload;
      const todo = state.todolists.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        if (done !== undefined) todo.done = done;
      }
    },
  },
});

export const todolistActions = todolistSlice.actions;
export default todolistSlice.reducer;

export const getProgress = (state) => {
  const list = state.Todolist.todolists;
  const total = list.length;
  const done = list.filter((item) => item.done).length;
  return total === 0 ? 0 : Math.round((done / total) * 100);
};
