import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
  todoList: Todo[];
}
const initialState: ITodo = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<Todo>) => {
      const filterTodo = state.todoList.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todoList = filterTodo;
    },
    markComplete: (state, action: PayloadAction<Todo>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !action.payload.completed;
        }
        return todo;
      });
    },
    editTodo: (state, action: PayloadAction<{ id: string; title: string }>) => {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
    },
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { addTodo, removeTodo, markComplete, editTodo } =
  todoSlice.actions;
// Other code such as selectors can use the imported `RootState` type

export default todoSlice.reducer;
export const todoReducer = todoSlice.reducer;
