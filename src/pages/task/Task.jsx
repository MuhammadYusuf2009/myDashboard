import React, { useState } from "react";
import { useDispatch } from "../../hooks/use-dispatch";
import { useSelector } from "../../hooks/use-selector";
import { todolistActions } from "../../store/todolist/index";

import {
  Box,
  Typography,
  TextField,
  List,
  Button,
  Paper,
  Container,
} from "@mui/material";

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
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        background: "linear-gradient(to right, #dfe6e9, #b2bec3)",
        py: 4,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "#ffffff",
          boxShadow: 6,
          borderRadius: 3,
          p: 4,
        }}
      >
        <Box mb={3}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            📋 Mening Vazifalarim
          </Typography>
          <Typography color="textSecondary">
            Kundalik ishlaringizni boshqaring va rejalashtiring
          </Typography>
        </Box>

        <Box display="flex" gap={2} mb={3} flexWrap="wrap">
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

        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            pr: 1,
          }}
        >
          {todolists.length === 0 ? (
            <Typography color="textSecondary">Hozircha vazifalar yo‘q</Typography>
          ) : (
            <List>
              {todolists.map((todo, index) => (
                <Paper
                  key={todo.id}
                  elevation={2}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 2,
                    bgcolor: todo.done ? "#e8f5e9" : "#fdfdfd",
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
                      wordBreak: "break-word",
                    }}
                  >
                    {index + 1}. {todo.title}
                  </Typography>

                  <Box display="flex" gap={1} mt={2} flexWrap="wrap">
                    <RemoveButton onClick={() => handleRemove(todo.id)} />
                    <Button
                      size="small"
                      color={todo.done ? "success" : "inherit"}
                      variant={todo.done ? "contained" : "outlined"}
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
