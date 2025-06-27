import { Button } from "@mui/material";

function RemoveButton({ onClick, color = "error", ...props }) {
  return (
    <Button
      variant="contained"
      edge="end"
      color={color}
      onClick={onClick}
      {...props}
    >
      Delete
    </Button>
  );
}

export default RemoveButton;
