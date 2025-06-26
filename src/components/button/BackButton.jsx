import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton({ onClick, children = "Orqaga", ...props }) {
  return (
    <Button
      variant="outlined"
      color="inherit"
      startIcon={<ArrowBackIcon />}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
}

export default BackButton;
