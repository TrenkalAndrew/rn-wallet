import React from 'react'

import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export type TPlugPageTemplate = {
  title: string
}

export const PlugPageTemplate = ({ title }: TPlugPageTemplate) => (
  <Wrapper>
    <Typography variant="h3">{title}</Typography>
  </Wrapper>
)
