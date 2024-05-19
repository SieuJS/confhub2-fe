/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// literal type
export type Theme = "dark" | "light" | "system";

import { applyTheme } from "@/utils/applyTheme";

type ThemeState = {
  theme: Theme;
};

const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";
  applyTheme(theme);
  return theme;
};

const initialState: ThemeState = {
  theme: initializeTheme()
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
