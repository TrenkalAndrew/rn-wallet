import 'styled-components'

declare module 'styled-components' {
  type TForegroundColor = 'primary'

  export type TBackgroundColor = 'primary'
  type TBorderColor = 'primary'

  export interface DefaultTheme {
    palette: {
      foreground: Record<TForegroundColor, string>
      background: Record<TBackgroundColor, string>
    }
    border: (multiplier: number) => number
    spacing: (multiplier: number) => number
  }
}
