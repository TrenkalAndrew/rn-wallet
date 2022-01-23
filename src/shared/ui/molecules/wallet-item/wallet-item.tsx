import React from 'react'

import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const Wrapper = styled.View`
  padding: ${({ theme }) => theme.spacing(2.5)}px 0;
`

export type TWalletItem = { title: string }

export const WalletItem = ({ title }: TWalletItem) => (
  <Wrapper>
    <Typography variant="h2">{title}</Typography>
  </Wrapper>
)
