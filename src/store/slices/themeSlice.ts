import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setThemeMode(state, action: PayloadAction<ThemeMode>) {
      state.mode = action.payload;
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;