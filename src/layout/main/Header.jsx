import { Box, Stack, Toolbar } from "@mui/material";
import Navbar from "./Navbar";

function Header() {
  return (
    <Stack direction="column" alignItems="flex-start">
      <Box>
        <Navbar />
      </Box>
    </Stack>
  );
}

export default Header;
