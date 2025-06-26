import { Box, Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <Grid container spacing={10}>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{
          background:
            "linear-gradient(rgba(249, 250, 251, 0.88), rgba(249, 250, 251, 0.88))",
          paddingLeft: "100px",
          width: "200px",
          "@media (max-width:950px)": {
            display: "none",
          },
        }}
      >
        <Stack
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              width: "100%",
              "@media (max-width:950px)": {
                display: "none",
              },
            }}
            src={"/dashboard.svg"}
          />
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 1, md: 3 }}
        sx={{
          "@media (max-width:950px)": {
            flexGrow: 1,
            width: "100%",
          },
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default LoginLayout;
