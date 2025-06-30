import { useTheme } from "@mui/material";

function Logo() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const darkLightLogo = isDark ? "/logolight.png" : "/darklogo.png";

  return (
    <img
      src={darkLightLogo}
      width={200}
      alt="Logo"
      style={{ marginTop: "20px" }}
    />
  );
}

export default Logo;
