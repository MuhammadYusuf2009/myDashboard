import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function UpdateButton({ onClick, children = "Yangilash", ...props }) {
  return (
    <Button
      variant="contained"
      color="info"
      startIcon={<EditIcon />}
      onClick={onClick}
      {...props}
      sx={{
        textTransform: "none",
        fontWeight: "bold",
        px: 3,
        py: 1,
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}

export default UpdateButton;
