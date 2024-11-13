import { createTheme, ThemeOptions } from "@mui/material/styles";

const sharedTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Playwrite DE Grund", serif',
    fontSize: 16,
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:960px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2.5rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.75rem",
      },
    },
    h6: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.125rem",
      },
      "@media (min-width:960px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.375rem",
      },
    },
    body2: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:960px)": {
        fontSize: "0.95rem",
      },
      "@media (min-width:1280px)": {
        fontSize: "1.1rem",
      },
    },
  },
};

const lightTheme: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1E1E1E"
    },
    secondary: {
      main: "#929AAB",
    },
    background: {
      default: "#FFFFFF",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#929AAB",
    },
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#F7F7F7",
    },
    background: {
      default: "#1E1E1E",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#F7F7F7",
    },
  },
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    ...sharedTheme,
    ...(mode === "light" ? lightTheme : darkTheme),
  });
