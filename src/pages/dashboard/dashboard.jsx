import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Search from "../../components/input/Search";
import Profile from "../../components/Profile/Profile";
import ThemeMode from "../../layout/main/ThemeMode";
function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ width: "98%", pl: 1, pt: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          mt: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", whiteSpace: "nowrap" }}
        >
          Dashboard
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <Search />
          </Box>
          <Box>
            <Profile />
          </Box>
          <Box>
            <ThemeMode />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
