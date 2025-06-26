import { useState } from "react";
import { Icon } from "@iconify/react";
import { Drawer, IconButton, Stack, useMediaQuery, Box } from "@mui/material";
import NavList from "./NavList";
import Logo from "../Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:850px)");

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(!open)}
            sx={{ position: "absolute", top: 16, left: 16, zIndex: 1300 }}
          >
            <Icon icon={open ? "mdi:close" : "mdi:menu"} width={30} />
          </IconButton>

          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              sx: {
                width: 250,
                p: 2,
                pt: 5,
              },
            }}
            ModalProps={{
              opens: true,
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Logo />
            </Box>
            <NavList />
          </Drawer>
        </>
      ) : (
        <Stack direction="column" spacing={4} sx={{ p: 2, mt: 2 }}>
          <Box>
            <Logo />
          </Box>
          <NavList />
        </Stack>
      )}
    </>
  );
}

export default Navbar;
