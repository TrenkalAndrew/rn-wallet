import 'styled-components'

declare module 'styled-components' {
  type TForegroundColor = 'primary' | 'secondary' | 'accent'

  export type TBackgroundColor = 'primary' | 'secondary' | 'accent'
  type TBorderColor = 'primary'

  type TFont =
    | 'SFUITextRegular'
    | 'SFUITextMedium'
    | 'SFUITextSemibold'
    | 'FactorAMedium'

  export interface DefaultTheme {
    palette: {
      foreground: Record<TForegroundColor, string>
      background: Record<TBackgroundColor, string>
    }
    fontFamily: Record<TFont, string>
    border: (multiplier: number) => number
    spacing: (multiplier: number) => number
  }
}
