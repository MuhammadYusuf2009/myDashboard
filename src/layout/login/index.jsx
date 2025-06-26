import { Box } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
function LoginLayout() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
  }, []);
  return (
    <Box sx={{ display: "flex", minHeight: "80vh" }}>
      <Box
        sx={{
          flex: 1,
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(rgba(249, 250, 251, 0.88), rgba(249, 250, 251, 0.88))",
        }}
      >
        <Box
          component="img"
          src="/dashboard.svg"
          sx={{
            width: "100%",
            maxWidth: "800px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "550px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default LoginLayout;
