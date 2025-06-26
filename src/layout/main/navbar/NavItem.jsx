import { useState, useRef } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";

function NavItem({ title, icon, path, children }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  const isActive = path && location.pathname === path;
  const isChildActive =
    children && children.some((item) => location.pathname === item.path);

  const handleOpen = (e) => {
    if (children) {
      setAnchorEl(e.currentTarget);
    }
  };

  const handleClose = () => setAnchorEl(null);

  if (children) {
    return (
      <>
        <Button
          ref={buttonRef}
          onClick={handleOpen}
          endIcon={<Icon icon="mdi:chevron-right" />}
          startIcon={<Icon icon={icon} />}
          sx={{
            textTransform: "none",
            color: isChildActive ? "#1976d2" : "#737791",
            bgcolor: isChildActive ? "#e3f2fd" : "transparent",
            width: "100%",
            justifyContent: "flex-start",
            p: 2,
            borderRadius: "10px",
            fontWeight: 500,
          }}
        >
          {title}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          PaperProps={{
            sx: {
              width: buttonRef.current?.offsetWidth || 180,
            },
          }}
        >
          {children.map((item, index) => {
            const active = location.pathname === item.path;
            return (
              <MenuItem
                key={index}
                component={Link}
                to={item.path}
                onClick={handleClose}
                sx={{
                  color: active ? "#1976d2" : "#444",
                  fontWeight: 500,
                  bgcolor: active ? "#e3f2fd" : "transparent",
                  "&:hover": { bgcolor: "#f0f0f0" },
                }}
              >
                <Icon icon={item.icon} style={{ marginRight: 8 }} />
                {item.title}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }

  return (
    <Button
      component={Link}
      to={path}
      startIcon={<Icon icon={icon} />}
      sx={{
        textTransform: "none",
        color: isActive ? "#1976d2" : "#737791",
        bgcolor: isActive ? "#e3f2fd" : "transparent",
        width: "100%",
        justifyContent: "flex-start",
        p: 2,
        borderRadius: "10px",
        fontWeight: 500,
        "&:hover": {
          bgcolor: "#f5f5f5",
        },
      }}
    >
      {title}
    </Button>
  );
}

export default NavItem;
