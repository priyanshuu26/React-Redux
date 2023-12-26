import { configureStore } from '@reduxjs/toolkit';
import todoListReducer from '../feature/todoListSlice';

export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
