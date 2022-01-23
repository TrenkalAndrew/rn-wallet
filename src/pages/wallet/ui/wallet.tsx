import React, { useCallback } from 'react'
import {
  FlatList,
  LayoutChangeEvent,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated'

import { Typography } from '@shared/ui/atoms'
import { DefaultPageTemplate } from '@shared/ui/templates'
import { useTheme, styled } from '@shared/ui/theme'

import { mocks } from './mocks'

const AnimatedTypography = Animated.createAnimatedComponent(Typography)

const StyledAnimatedTypography = styled(AnimatedTypography)`
  align-self: flex-start;
`

const keyExtractor = (item: string, index: number) => item + index

type TWalletProps = { header: string }

export const Wallet = ({ header }: TWalletProps) => {
  const theme = useTheme()
  const offsetY = useSharedValue(0)
  const initialHeaderWidth = useSharedValue(0)

  const typographyStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      offsetY.value,
      [0, -250],
      [1, 1.2],
      Extrapolate.CLAMP,
    )

    const headerWidth = initialHeaderWidth.value
    const translateX = (headerWidth * scale - headerWidth) / 2

    return {
      transform: [
        {
          scale,
        },
        { translateX },
      ],
      opacity: interpolate(offsetY.value, [0, 10], [1, 0], Extrapolate.CLAMP),
    }
  })

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      initialHeaderWidth.value = event.nativeEvent.layout.width
    },
    [initialHeaderWidth],
  )

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      offsetY.value = event.nativeEvent.contentOffset.y
    },
    [offsetY],
  )

  const renderItem: ListRenderItem<string> = useCallback(
    ({ item }) => <Typography>{item}</Typography>,
    [],
  )

  const ListHeaderComponent = useCallback(
    () => (
      <StyledAnimatedTypography
        onLayout={onLayout}
        variant="h1"
        style={typographyStyles}
      >
        {header}
      </StyledAnimatedTypography>
    ),
    [header, onLayout, typographyStyles],
  )

  return (
    <DefaultPageTemplate>
      <FlatList
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={{ padding: theme.spacing(2) }}
        data={mocks}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        initialNumToRender={30}
        maxToRenderPerBatch={30}
        windowSize={5}
        onScroll={onScroll}
      />
    </DefaultPageTemplate>
  )
}
