import { Stack, CircularProgress } from "@mui/material";

const Loader = ({ loading = false }) => {
  if (!loading) return null;

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      h
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999,
        position: "absolute",
      }}
    >
      <CircularProgress color="inherit" sx={{ width: "100%", maxWidth: 300 }} />
    </Stack>
  );
};

export default Loader;
