import React, { useCallback } from 'react'
import { FlatList, ListRenderItem } from 'react-native'

import { Divider } from '@shared/ui/atoms'
import { DefaultPageTemplate } from '@shared/ui/templates'
import { useTheme } from '@shared/ui/theme'
import { Header, WalletItem } from '@shared/ui/molecules'
import { useHeaderAnimation } from '@shared/lib/hooks'

import { mocks } from './mocks'

const keyExtractor = (item: string, index: number) => item + index

type TWalletProps = { header: string }

export const Wallet = ({ header }: TWalletProps) => {
  const theme = useTheme()
  const { offsetY, onScroll, ListHeaderComponent, scrollIndicatorOffset } =
    useHeaderAnimation({ headerTitle: header })

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => <WalletItem title={item} />,
    [],
  )

  return (
    <DefaultPageTemplate>
      <Header title={header} offsetY={offsetY} />
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{ padding: theme.spacing(2) }}
        data={mocks}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
        initialNumToRender={30}
        maxToRenderPerBatch={50}
        windowSize={5}
        onScroll={onScroll}
        scrollIndicatorInsets={{ top: scrollIndicatorOffset }}
      />
    </DefaultPageTemplate>
  )
}
