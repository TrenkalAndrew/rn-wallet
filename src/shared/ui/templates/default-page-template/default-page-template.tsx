import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export type TDefaultPageTemplate = {
  children: ReactNode
}

export const DefaultPageTemplate = ({ children }: TDefaultPageTemplate) => {
  const { top } = useSafeAreaInsets()

  return <View style={{ paddingTop: top }}>{children}</View>
}
