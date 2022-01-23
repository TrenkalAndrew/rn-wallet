import React from 'react'
import { StatusBar } from 'react-native'

import { RootNavigator } from '@routing/root-navigator'

import { ThemeProvider, theme } from '../shared/ui/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <RootNavigator />
    </ThemeProvider>
  )
}

export default App
