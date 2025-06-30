import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/index";
function MainLayout() {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          width: { xs: "auto", md: "250px" },
          flexShrink: 0,
          position: "fixed",
          height: "100vh",
          bgcolor: theme.palette.background.paper,
        }}
      >
        <Navbar />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: theme.palette.background.default,
          marginLeft: { xs: 0, md: "250px" },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
