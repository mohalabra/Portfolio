import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ThemeMode = string | null;

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode:
    typeof window !== "undefined" && localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.mode);
    },
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
