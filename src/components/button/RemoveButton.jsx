import { Button } from "@mui/material";

function RemoveButton({ onClick, color = "error", ...props }) {
  return (
    <Button edge="end" color={color} onClick={onClick} {...props}>
      Delete
    </Button>
  );
}

export default RemoveButton;
