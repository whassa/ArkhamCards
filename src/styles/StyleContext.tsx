import React from 'react';
import { Platform, ViewStyle } from 'react-native';

import { LIGHT_THEME, ThemeColors } from './theme';
import typography, { Typography } from '@styles/typography';

export interface StyleContextType {
  darkMode: boolean;
  colors: ThemeColors;
  gameFont: string;
  fontScale: number;
  typography: Typography;
  backgroundStyle: ViewStyle;
  borderStyle: ViewStyle;
  disabledStyle: ViewStyle;
  shadow: {
    small: ViewStyle;
    medium: ViewStyle;
    large: ViewStyle;
  };
}

export const DEFAULLT_STYLE_CONTEXT = {
  darkMode: false,
  colors: LIGHT_THEME,
  gameFont: 'Teutonic',
  fontScale: 1,
  typography: typography(1.0, LIGHT_THEME, 'Teutonic'),
  backgroundStyle: {
    backgroundColor: LIGHT_THEME.background,
  },
  borderStyle: {
    borderColor: LIGHT_THEME.divider,
  },
  disabledStyle: {
    backgroundColor: LIGHT_THEME.disableOverlay,
  },
  shadow: {
    large: Platform.select({
      android: {
        elevation: 6,
      },
      default: {
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
      },
    }),
    medium: Platform.select({
      android: {
        elevation: 4,
      },
      default: {
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
      },
    }),
    small: Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.25,
      },
    }),
  },
};

export const StyleContext = React.createContext<StyleContextType>(DEFAULLT_STYLE_CONTEXT);

export default StyleContext;
