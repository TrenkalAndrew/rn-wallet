import * as styledComponents from 'styled-components/native'

const {
  default: styled,
  css,
  ThemeProvider,
  ThemeContext,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<styledComponents.DefaultTheme>

export { css, ThemeProvider, styled, ThemeContext }
