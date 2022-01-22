import { StyleProp, TextStyle } from 'react-native'
import { TForegroundColor } from 'styled-components'
import { DefaultTheme } from 'styled-components/native'

import { styled } from '@shared/ui/theme'

export type TVariant =
  | 'largeTitle'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'button'
  | 'body'
  | 'caption1'
  | 'caption2'
  | 'caption3'

type TFonts = keyof DefaultTheme['fontFamily']

type TTypographyProps = {
  variant?: TVariant
  color?: TForegroundColor
  opacity?: number
  textAlign?: StyleProp<TextStyle['textAlign']>
}

const fontSize: Record<TVariant, number> = {
  largeTitle: 32,
  h1: 24,
  h2: 20,
  h3: 17,
  h4: 15,
  button: 17,
  body: 16,
  caption1: 13,
  caption2: 11,
  caption3: 11,
}

const lineHeight: Record<TVariant, number> = {
  largeTitle: 40,
  h1: 32,
  h2: 24,
  h3: 24,
  h4: 20,
  button: 24,
  body: 20,
  caption1: 16,
  caption2: 16,
  caption3: 12,
}

const fontByVariant: Record<TVariant, TFonts> = {
  largeTitle: 'FactorAMedium',
  h1: 'FactorAMedium',
  h2: 'FactorAMedium',
  h3: 'FactorAMedium',
  h4: 'FactorAMedium',
  button: 'FactorAMedium',
  body: 'SFUITextRegular',
  caption1: 'SFUITextRegular',
  caption2: 'SFUITextMedium',
  caption3: 'SFUITextSemibold',
}

const colorsByVariant: Record<TVariant, TForegroundColor> = {
  largeTitle: 'primary',
  h1: 'primary',
  h2: 'primary',
  h3: 'primary',
  h4: 'primary',
  button: 'primary',
  body: 'primary',
  caption1: 'primary',
  caption2: 'primary',
  caption3: 'primary',
}

export const Typography = styled.Text.attrs(() => ({
  allowFontScaling: false,
}))<TTypographyProps>`
  font-size: ${({ variant = 'body' }) => fontSize[variant]}px;
  line-height: ${({ variant = 'body' }) => lineHeight[variant]}px;
  font-family: ${({ theme, variant = 'body' }) =>
    theme.fontFamily[fontByVariant[variant]]};
  color: ${({ theme, color, variant = 'body' }) =>
    theme.palette.foreground[color || colorsByVariant[variant]]};
  opacity: ${({ opacity = 1 }) => opacity};
  text-align: ${({ textAlign = 'auto' }) => textAlign};
`
