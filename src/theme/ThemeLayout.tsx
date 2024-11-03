"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
