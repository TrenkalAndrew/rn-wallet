import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LabelPosition } from '@react-navigation/bottom-tabs/lib/typescript/src/types'

import { css, styled, useTheme } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'
import { Icons } from '@shared/ui/icons'
import { Exchange } from '@pages/exchange'
import { Profile } from '@pages/profile'
import { WalletConnector } from '@pages/wallet'

import { TTabsParamList } from '../types'

const landscapeMixin = css`
  margin-left: 20px;
  margin-top: 3px;
`

const portraitMixin = css``

const TabBarLabel = styled(Typography)<{ position: LabelPosition }>`
  ${({ position }) =>
    position === 'beside-icon' ? landscapeMixin : portraitMixin}
`

const tabs: Record<
  keyof TTabsParamList,
  {
    icon: (props: { color?: string }) => JSX.Element
    label: string
  }
> = {
  Wallet: {
    icon: Icons.Cards,
    label: 'Wallet',
  },
  Exchange: {
    icon: Icons.Exchange,
    label: 'Exchange',
  },
  Settings: {
    icon: Icons.Profile,
    label: 'Profile',
  },
}

const Tab = createBottomTabNavigator<TTabsParamList>()

export const TabNavigator = () => {
  const theme = useTheme()

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme.palette.background.primary,
      }}
      screenOptions={({ route }) => {
        const { label, icon: Icon } = tabs[route.name]
        return {
          headerShown: false,
          tabBarLabel: ({ focused, position }) => (
            <TabBarLabel
              variant="caption3"
              color={focused ? 'accent' : 'secondary'}
              position={position}
            >
              {label}
            </TabBarLabel>
          ),
          tabBarIcon: ({ focused }) => (
            <Icon
              color={
                focused
                  ? theme.palette.foreground.accent
                  : theme.palette.foreground.secondary
              }
            />
          ),
          tabBarStyle: {
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: theme.palette.background.primary,
            borderTopWidth: 0,
          },
        }
      }}
    >
      <Tab.Screen name="Wallet" component={WalletConnector} />
      <Tab.Screen name="Exchange" component={Exchange} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  )
}
