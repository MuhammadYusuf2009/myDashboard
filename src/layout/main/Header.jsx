import { Box, Stack, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import Logo from "./Logo";

function Header() {
  return (
    <Stack direction="column" alignItems="flex-start">
      <Box>
        <Logo />
      </Box>

      <Box>
        <Navbar />
      </Box>
    </Stack>
  );
}

export default Header;
