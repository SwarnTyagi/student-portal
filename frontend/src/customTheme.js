import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#DB6D92",
      main: "#CC3366",
      dark: "#922449",
      contrastText: "#fff",
    },
    secondary: {
      light: "#FFAFAF",
      main: "#FF9999",
      dark: "#FF4242",
      contrastText: "#000",
    },
  },
});

export default theme;
