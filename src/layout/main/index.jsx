import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect } from "react";

function MainLayout() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.boxSizing = "border-box";
  }, []);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box sx={{ width: { xs: "auto", md: "250px" }, flexShrink: 0 }}>
        <Navbar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fafafa",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
