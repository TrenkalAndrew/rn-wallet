import { DefaultTheme } from 'styled-components'

const defaultBorderMultiplier = 4
const defaultSpacingMultiplier = 8

const colors = {
  darkBlue: '#151c29',
  white: '#FFFFFF',
  grey: '#a3a3b2',
  blue: '#44aff6',
}

export const theme: DefaultTheme = {
  palette: {
    foreground: {
      primary: colors.white,
      secondary: colors.grey,
      accent: colors.blue,
    },
    background: {
      primary: colors.darkBlue,
      accent: colors.blue,
    },
  },
  fontFamily: {
    SFUITextRegular: 'SFUIText-Regular',
    SFUITextMedium: 'SFUIText-Medium',
    SFUITextSemibold: 'SFUIText-Semibold',
    FactorAMedium: 'FactorA-Medium',
  },
  border: (multiplier: number) => multiplier * defaultBorderMultiplier,
  spacing: (multiplier: number) => multiplier * defaultSpacingMultiplier,
}
