import React from 'react'

import { RootNavigator } from '@routing/root-navigator'

import { ThemeProvider, theme } from '../shared/ui/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RootNavigator />
    </ThemeProvider>
  )
}

export default App
