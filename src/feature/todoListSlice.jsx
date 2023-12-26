import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [],
  reducers: {
    addToDo(state, action) {
      if (action.payload === '') {
        return state;
      }
      state.push(action.payload);
      // console.log(state, 'state');
      // console.log(action.payload, 'payload');
    },
    removeToDo(state, action) {
      state.splice(action.payload, 1);
    },
    clearAll(state) {
      return [];
    },
  },
});

export const { addToDo, removeToDo, clearAll } = todoListSlice.actions;
export default todoListSlice.reducer;
