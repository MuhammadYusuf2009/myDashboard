import React from "react";
import { Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

function SaveButton({ onClick }) {
  return (
    <Button
      variant="contained"
      color="success"
      onClick={onClick}
      size="small"
      startIcon={<SaveIcon />}
      sx={{
        px: 3,
        py: 1,
        fontWeight: "bold",
        textTransform: "none",
      }}
    >
      Saqlash
    </Button>
  );
}

export default SaveButton;
