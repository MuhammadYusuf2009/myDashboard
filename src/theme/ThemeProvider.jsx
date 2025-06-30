// theme/ThemeProvider.js
import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { useModeContext } from "./ModeContext";
import { palette } from "./palette";

export const ThemeProvider = ({ children }) => {
  const { mode } = useModeContext();

  const theme = createTheme({
    palette: palette(mode),
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
