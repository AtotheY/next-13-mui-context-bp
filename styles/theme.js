const common = {
  specialPurple: {
    main: '#6E6DD5',
    light: '#a7a6e5',
    dark: '#4645c9',
  },
};

export const darkPalette = {
  mode: 'dark',
  ...common,
};

export const lightPalette = {
  mode: 'light',
  ...common,
};

export const baseTheme = {
  spacing: [
    0, // 0
    4, // 1
    8, // 2
    12, // 3
    16, // 4
    24, // 5
    32, // 6
    48, // 7
    64, // 8
    96, // 9
    128, // 10
    190, // 11
    240, // 12
    384, // 14
    430, // 15
    640, // 16
    768, // 17
    1160, // 18
  ],
  typography: {
    largeBold: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '14px',
    },
    large: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '14px',
    },
    largeLight: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '14px',
    },
    mainBold: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '12px',
      lineHeight: '14px',
    },
    main: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '14px',
    },
    mainLight: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
    },
    subtextBold: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: '12px',
    },
    subtext: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '10px',
      lineHeight: '12px',
    },
    subtextLight: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '10px',
      lineHeight: '12px',
    },
    smallBold: {
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '8px',
      lineHeight: '9px',
    },
    small: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '8px',
      lineHeight: '9px',
    },
    smallLight: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: '8px',
      lineHeight: '9px',
    },
    tooltip: {
      fontWeight: 500,
      fontSize: 12,
    },
  },
};
