"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { toggleThemeMode } from "@/src/store/slices/themeSlice";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = useTheme();

  return (
    <Tooltip title={mode === "light" ? "Dark" : "Light"}>
      <IconButton
        sx={{ ml: 2, alignSelf: 'flex-end'}}
        onClick={() => dispatch(toggleThemeMode())}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
