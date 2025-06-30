import { Box, Stack } from "@mui/material";
import Navbar from "./navbar/index";
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
