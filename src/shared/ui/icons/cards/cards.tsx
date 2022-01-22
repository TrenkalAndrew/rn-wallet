import React from 'react'
import Svg, { Path } from 'react-native-svg'

import { useTheme } from '../../theme'

type TCardsProps = {
  color?: string
  size?: number
}

export const Cards = ({ color, size }: TCardsProps) => {
  const theme = useTheme()

  const stroke = color || theme.palette.foreground.accent

  return (
    <Svg width={size || 24} height={size || 24} fill="none">
      <Path
        d="M19 9.5V4.5C19 4.22386 18.7761 4 18.5 4H2.5C2.22386 4 2 4.22386 2 4.5V13.5C2 13.7761 2.22386 14 2.5 14H4.5"
        stroke={stroke}
        strokeWidth={1.8}
      />
      <Path
        d="M2.36865 6.80005L18.6542 6.78044"
        stroke={stroke}
        strokeWidth={1.8}
      />
      <Path
        d="M22 10.5V19.5C22 19.7761 21.7761 20 21.5 20H5.5C5.22386 20 5 19.7761 5 19.5V10.5C5 10.2239 5.22386 10 5.5 10H21.5C21.7761 10 22 10.2239 22 10.5Z"
        stroke={stroke}
        strokeWidth={1.8}
      />
      <Path
        d="M5.35718 12.7979L21.6427 12.7782"
        stroke={stroke}
        strokeWidth={1.8}
      />
      <Path
        d="M7.17721 17.5811L8.9095 17.5811"
        stroke={stroke}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  )
}
