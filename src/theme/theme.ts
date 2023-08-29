import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  brown: '#D68352',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  success: '#4ABC86',
  successLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',
  grayBlack: '#101010',
  gray1: '#4D4D4D',
  gray2: '#999999',
  gray3: '#B3B3B3',
  gray4: '#E6E6E6',
  gray5: '#F2F2F2',
  white: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.greenPrimary,
    primaryContrast: palette.white,

    buttonPrimary: palette.greenPrimary,

    background: palette.white,
    backgroundContrast: palette.grayBlack,

    error: palette.redError,
    errorLight: palette.redErrorLight,

    success: palette.success,
    successLight: palette.successLight,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
    s32: 32,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
