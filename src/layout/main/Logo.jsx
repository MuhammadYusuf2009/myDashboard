import { Typography } from "@mui/material";

function Logo({ small = false }) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        fontSize: small ? "18px" : "24px",
        color: "#333",
        userSelect: "none",
      }}
    >
      <img src="/Logo.png" width={200} alt="" style={{ marginTop: "20px" }} />
    </Typography>
  );
}

export default Logo;
