import { createTheme } from "@mui/material/styles";
import config from "../config/config";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: config.colors.primary,
    },
    secondary: {
      main: config.colors.accent,
    },
    background: {
      default: config.colors.background,
      paper: "#ffffff",
    },
    text: {
      primary: config.colors.textPrimary,
      secondary: config.colors.textSecondary,
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
