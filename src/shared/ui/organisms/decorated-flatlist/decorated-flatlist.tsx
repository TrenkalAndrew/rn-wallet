import React from 'react'
import { FlatList, FlatListProps, StyleSheet } from 'react-native'

import { useTheme } from '@shared/ui/theme'

const styles = StyleSheet.create({
  flatList: {
    borderBottomWidth: 1,
  },
})

export type TDecoratedFlatList<T> = FlatListProps<T> & {
  hasScrollToEnd: boolean
}

type Component = <T>(props: TDecoratedFlatList<T>) => React.ReactElement

export const DecoratedFlatList: Component = ({ hasScrollToEnd, ...props }) => {
  const theme = useTheme()

  return (
    <FlatList
      {...props}
      style={[
        styles.flatList,
        {
          borderBottomColor: hasScrollToEnd
            ? theme.palette.background.secondary
            : theme.palette.background.primary,
        },
      ]}
    />
  )
}
