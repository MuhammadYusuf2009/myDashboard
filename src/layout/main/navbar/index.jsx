import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import NavList from "./NavList";
import Logo from "../Logo";
import LinearProgres from "../../../components/LinearProgres/LinearProgres";
import { useSelector } from "../../../hooks/use-selector";
import { getProgress } from "../../../store/todolist";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:850px)");
  const progress = useSelector(getProgress);

  const renderProgressBox = (
    <Box
      sx={{
        p: 2,
        mt: 2,
        bgcolor: "#f0f4f8",
        borderRadius: 3,
        boxShadow: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        flexDirection: "column",
      }}
    >
      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ fontWeight: 600 }}
      >
        Vazifalar bajarilishi:
      </Typography>
      <LinearProgres progress={progress} />
    </Box>
  );

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
                width: 280,
                p: 2,
                pt: 5,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Logo />
            </Box>
            <Divider sx={{ my: 2 }} />
            <NavList />
            <Box>{renderProgressBox}</Box>
          </Drawer>
        </>
      ) : (
        <Stack direction="column" spacing={3} sx={{ p: 2, mt: 2 }}>
          <Logo />
          <NavList />
          <Box>{renderProgressBox}</Box>
        </Stack>
      )}
    </>
  );
}

export default Navbar;
