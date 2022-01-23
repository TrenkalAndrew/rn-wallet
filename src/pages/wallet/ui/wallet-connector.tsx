import React from 'react'

import { TWalletScreenProps } from '@routing/tabs-navigator/types'

import { Wallet } from './wallet'

export type TWalletConnector = TWalletScreenProps

export const WalletConnector = ({ route }: TWalletConnector) => {
  const routeName = route.name

  return <Wallet header={routeName} />
}
