import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddButton({ onClick, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
      {...props}
      sx={{
        px: 3,
        py: 1,
        fontWeight: "bold",
        textTransform: "none",
      }}
    >
      Qo`shish
    </Button>
  );
}

export default AddButton;
