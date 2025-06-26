import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  List,
  Button,
  Paper,
  Container,
} from "@mui/material";
import { useDispatch } from "../../hooks/use-dispatch";
import { useSelector } from "../../hooks/use-selector";
import { todolistActions } from "../../store/todolist";
import AddButton from "../../components/button/AddButton";
import RemoveButton from "../../components/button/RemoveButton";
import SaveButton from "../../components/button/SaveButton";

function Task() {
  const dispatch = useDispatch();
  const todolists = useSelector((state) => state.Todolist.todolists);
  const [todoText, setTodoText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!todoText.trim()) return;

    if (editId) {
      dispatch(
        todolistActions.updateTodoList({
          id: editId,
          title: todoText.trim(),
        })
      );
      setEditId(null);
    } else {
      dispatch(
        todolistActions.addTodoList({
          id: Date.now(),
          title: todoText.trim(),
          done: false,
        })
      );
    }

    setTodoText("");
  };

  const handleRemove = (id) => {
    dispatch(todolistActions.removeTodoList({ id }));
  };

  const handleToggleDone = (id) => {
    const todo = todolists.find((t) => t.id === id);
    if (todo) {
      dispatch(
        todolistActions.updateTodoList({
          id,
          title: todo.title,
          done: !todo.done,
        })
      );
    }
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setTodoText(todo.title);
  };

  const handleCancel = () => {
    setEditId(null);
    setTodoText("");
  };

  return (
    <Box minHeight="100vh" width="100%" sx={{ background: "#ecf0f1", py: 4 }}>
      <Container maxWidth="md" sx={{ bgcolor: "#fff", p: 4, borderRadius: 3 }}>
        <Box mb={3} textAlign="center">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            📋 Mening Vazifalarim
          </Typography>
          <Typography color="textSecondary">
            Kundalik ishlaringizni rejalang va kuzating
          </Typography>
        </Box>
        <Box display="flex" gap={2} mb={3}>
          <TextField
            label="Yangi vazifa"
            fullWidth
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            variant="outlined"
            size="small"
          />
          {editId ? (
            <>
              <SaveButton onClick={handleAddOrUpdate} />
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleCancel}
              >
                Bekor
              </Button>
            </>
          ) : (
            <AddButton onClick={handleAddOrUpdate} />
          )}
        </Box>

        <Box sx={{ maxHeight: 400, overflowY: "auto" }}>
          {todolists.length === 0 ? (
            <Typography color="textSecondary">
              Hozircha vazifalar yo‘q
            </Typography>
          ) : (
            <List>
              {todolists.map((todo, index) => (
                <Paper
                  key={todo.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderLeft: `4px solid ${
                      todo.done ? "#4caf50" : "#1976d2"
                    }`,
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: todo.done ? "line-through" : "none",
                      color: todo.done ? "#777" : "#000",
                      fontSize: "17px",
                      fontWeight: 500,
                    }}
                  >
                    {index + 1}. {todo.title}
                  </Typography>
                  <Box display="flex" gap={1} mt={2}>
                    <RemoveButton onClick={() => handleRemove(todo.id)} />
                    <Button
                      size="small"
                      variant={todo.done ? "contained" : "outlined"}
                      color={todo.done ? "success" : "inherit"}
                      onClick={() => handleToggleDone(todo.id)}
                    >
                      {todo.done ? "Bajarildi" : "Bajarilmagan"}
                    </Button>
                    <Button size="small" onClick={() => handleEdit(todo)}>
                      Tahrirlash
                    </Button>
                  </Box>
                </Paper>
              ))}
            </List>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Task;
