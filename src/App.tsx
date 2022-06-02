import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { v4 as uuidv4 } from "uuid";
import { addTodo, markComplete, removeTodo } from "./redux/slices/todo";
import { RootState } from "./redux/storeToolkit";
function App() {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useAppDispatch();
  const { todoList } = useAppSelector((state: RootState) => state);
  const handleSubmit = () => {
    // collect todo data and dispatch addTodo
    const newTodo: Todo = {
      id: uuidv4(),
      completed: false,
      title: todo,
    };
    dispatch(addTodo(newTodo));
    setTodo("");
  };
  const handleMarkComplete = (item: Todo) => {
    dispatch(markComplete(item));
  };
  const handleDelete = (item: Todo) => {
    dispatch(removeTodo(item));
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography align="center" variant="h2" component="h2">
          ReduxToolkit Todolist
        </Typography>
        <Container maxWidth="xs">
          <TextField
            id="outlined-basic"
            label="Type your todo"
            variant="outlined"
            fullWidth
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Add todo List
          </Button>
        </Container>
        <Container className="flex">
          {todoList?.map((item) => (
            <div key={item.id} className="flex space-x-2">
              <input
                onClick={() => handleMarkComplete(item)}
                checked={item.completed}
                type="checkbox"
              />
              <p>{item.title}</p>
              <button
                className="w-10 bg-red-300"
                onClick={() => handleDelete(item)}
              >
                Delete{" "}
              </button>
            </div>
          ))}
        </Container>
      </Container>
    </div>
  );
}

export default App;
