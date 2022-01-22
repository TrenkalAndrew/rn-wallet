import { DefaultTheme } from 'styled-components'

const defaultBorderMultiplier = 4
const defaultSpacingMultiplier = 8

const colors = {
  blue: '#151c29',
  white: '#FFFFFF',
  grey: '#F8F8F8',
}

export const theme: DefaultTheme = {
  palette: {
    foreground: {
      primary: colors.white,
    },
    background: {
      primary: colors.blue,
    },
  },
  border: (multiplier: number) => multiplier * defaultBorderMultiplier,
  spacing: (multiplier: number) => multiplier * defaultSpacingMultiplier,
}
