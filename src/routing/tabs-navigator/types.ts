import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type TTabsParamList = {
  Wallet: undefined
  Exchange: undefined
  Settings: undefined
}

export type TRootStackRouteNames = keyof TTabsParamList

export type TWalletScreenProps = BottomTabScreenProps<TTabsParamList, 'Wallet'>

export type TExchangeScreenProps = BottomTabScreenProps<
  TTabsParamList,
  'Exchange'
>

export type TSettingsScreenProps = BottomTabScreenProps<
  TTabsParamList,
  'Settings'
>
