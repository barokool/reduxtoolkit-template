import {
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@material-ui/core";

import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { editTodo } from "../../redux/slices/todo";

export interface SimpleDialogProps {
  open: boolean;
  item: Todo;
  onClose: () => void;
  Selected: string;
  setSelected: (text: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, item, open, Selected, setSelected } = props;

  const dispatch = useAppDispatch();

  const handleEdit = (todo: Todo) => {
    const newItem: Todo = {
      id: todo.id,
      completed: todo.completed,
      title: Selected,
    };
    dispatch(editTodo(newItem));
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <div className=" flex justify-end select-none cursor-pointer hover:opacity-70 p-2">
        <div onClick={() => onClose()}>X</div>
      </div>

      <div className="m-4 flex flex-col gap-2">
        <TextField
          value={Selected}
          onChange={(e) => setSelected(e.target.value)}
          variant="outlined"
        />
        <Button onClick={() => handleEdit(item)} variant="outlined">
          Edit todo
        </Button>
      </div>
    </Dialog>
  );
}

export default SimpleDialog;
