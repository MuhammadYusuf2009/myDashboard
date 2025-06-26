import { useEffect, useState } from "react";
import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Icon } from "@iconify/react";
import { logoutUser } from "../../firebase/firesotre/auth";

function Profile() {
  const [user, setUser] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, setUser);
  }, []);

  if (!user) return false;

  return (
    <Box>
      <Avatar
        src={user.photoURL}
        onClick={(e) => setOpen(e.currentTarget)}
        sx={{ width: 40, height: 40, cursor: "pointer" }}
      >
        {!user.photoURL &&
          (user.displayName?.[0] || user.email.charAt(0).toUpperCase())}
      </Avatar>

      <Menu
        anchorEl={open}
        open={open}
        onClose={() => setOpen(false)}
        sx={{ width: "250px" }}
      >
        <MenuItem disabled sx={{ fontSize: 12, fontWeight: 600 }}>
          {user.email}
        </MenuItem>
        <MenuItem
          onClick={() => {
            logoutUser();
            setOpen(false);
          }}
        >
          <Icon icon="mdi:logout" width={20} />
          &nbsp; Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Profile;
