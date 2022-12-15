'use client';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { useLocalContext } from 'helpers/context';
import { baseTheme, darkPalette, lightPalette } from 'styles/theme';

export default function ThemeProvider({ children }) {
  const { darkMode } = useLocalContext();
  const palette = Object.assign(
    baseTheme,
    darkMode ? darkPalette : lightPalette
  );
  const currentTheme = createTheme({ ...baseTheme, palette });

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  );
}
