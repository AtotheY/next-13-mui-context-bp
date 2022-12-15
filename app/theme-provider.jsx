'use client';

import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { useLocalContext } from 'helpers/context';
import { baseTheme, darkPalette, lightPalette } from 'styles/theme';

export default function ThemeProvider({ children }) {
  const { theme } = useLocalContext();
  const palette = theme === 'dark' ? darkPalette : lightPalette;
  const currentTheme = createTheme({ ...baseTheme, palette });

  return (
    <MuiThemeProvider theme={currentTheme}>
      <CssBaseline>{children}</CssBaseline>
    </MuiThemeProvider>
  );
}
