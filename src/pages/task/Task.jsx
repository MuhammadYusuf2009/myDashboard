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
    <Box
      minHeight="100vh"
      maxWidth="100%"
      sx={{
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        py: 4,
        px: { xs: 2, sm: 4 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          bgcolor: "#FAFAFA",
          py: 4,
          px: { xs: 2, sm: 4 },
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Box mb={3} textAlign="center">
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            color="#0D47A1"
          >
            📋 Mening Vazifalarim
          </Typography>
          <Typography color="#607D8B">
            Kundalik ishlaringizni rejalang va kuzating
          </Typography>
        </Box>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          gap={2}
          mb={3}
        >
          <TextField
            label="Yangi vazifa"
            fullWidth
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            variant="outlined"
            size="small"
          />
          <Box
            display="flex"
            gap={1}
            flexDirection={{ xs: "column", sm: "row" }}
            width={{ xs: "100%", sm: "auto" }}
          >
            {editId ? (
              <>
                <SaveButton onClick={handleAddOrUpdate} fullWidth />
                <Button
                  variant="outlined"
                  color="inherit"
                  size="small"
                  onClick={handleCancel}
                  fullWidth
                >
                  Bekor
                </Button>
              </>
            ) : (
              <AddButton onClick={handleAddOrUpdate} fullWidth />
            )}
          </Box>
        </Box>

        <Box sx={{ maxHeight: 400, overflowY: "auto" }}>
          {todolists.length === 0 ? (
            <Typography color="#9E9E9E" textAlign="center">
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
                    bgcolor: "#fff",
                    borderLeft: `4px solid ${
                      todo.done ? "#4CAF50" : "#0D47A1"
                    }`,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <Typography
                    sx={{
                      textDecoration: todo.done ? "line-through" : "none",
                      color: todo.done ? "#9E9E9E" : "#212121",
                      fontSize: "17px",
                      fontWeight: 500,
                    }}
                  >
                    {index + 1}. {todo.title}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", sm: "row" }}
                    gap={1}
                    mt={2}
                  >
                    <RemoveButton
                      onClick={() => handleRemove(todo.id)}
                      fullWidth
                    />
                    <Button
                      size="small"
                      variant={todo.done ? "contained" : "outlined"}
                      color={todo.done ? "success" : "primary"}
                      onClick={() => handleToggleDone(todo.id)}
                      fullWidth
                    >
                      {todo.done ? "Bajarildi" : "Bajarilmagan"}
                    </Button>
                    <Button
                      size="small"
                      onClick={() => handleEdit(todo)}
                      fullWidth
                    >
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
