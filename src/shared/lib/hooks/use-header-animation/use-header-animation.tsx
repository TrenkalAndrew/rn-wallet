import React, { useCallback } from 'react'
import {
  LayoutChangeEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'
import Animated, {
  useSharedValue,
  Extrapolate,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated'

import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const AnimatedTypography = Animated.createAnimatedComponent(Typography)

const StyledAnimatedTypography = styled(AnimatedTypography)`
  align-self: flex-start;
  padding-top: ${({ theme }) => theme.spacing(1.25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.5)}px;
`

export const useHeaderAnimation = (headerTitle: string) => {
  const offsetY = useSharedValue(0)
  const initialHeaderWidth = useSharedValue(0)

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      initialHeaderWidth.value = event.nativeEvent.layout.width
    },
    [initialHeaderWidth],
  )

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

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      offsetY.value = event.nativeEvent.contentOffset.y
    },
    [offsetY],
  )

  const ListHeaderComponent = useCallback(
    () => (
      <StyledAnimatedTypography
        onLayout={onLayout}
        variant="h1"
        style={typographyStyles}
      >
        {headerTitle}
      </StyledAnimatedTypography>
    ),
    [headerTitle, onLayout, typographyStyles],
  )

  return { offsetY, onScroll, ListHeaderComponent }
}
