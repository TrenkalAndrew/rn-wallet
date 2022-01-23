import React, { useCallback, useState } from 'react'
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
  runOnJS,
} from 'react-native-reanimated'

import { Typography } from '@shared/ui/atoms'
import { styled } from '@shared/ui/theme'

const AnimatedTypography = Animated.createAnimatedComponent(Typography)

const StyledAnimatedTypography = styled(AnimatedTypography)`
  align-self: flex-start;
  padding-top: ${({ theme }) => theme.spacing(1.25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2.5)}px;
`

const maxScrollAnimationValue = -250

type TUseHeaderAnimation = {
  headerTitle: string
  startAnimationValue?: number
  endAnimationValue?: number
}

export const useHeaderAnimation = ({
  headerTitle,
  startAnimationValue = 0,
  endAnimationValue = 10,
}: TUseHeaderAnimation) => {
  const offsetY = useSharedValue(0)
  const initialHeaderHeight = useSharedValue(0)
  const [scrollIndicatorOffset, setScrollIndicatorOffset] = useState(0)
  const [hasScrollToEnd, setScrollEnd] = useState(false)

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      initialHeaderHeight.value = event.nativeEvent.layout.height
    },
    [initialHeaderHeight],
  )

  const typographyStyles = useAnimatedStyle(() => {
    const scale = interpolate(
      offsetY.value,
      [startAnimationValue, maxScrollAnimationValue],
      [1, 1.35],
      Extrapolate.CLAMP,
    )

    runOnJS(setScrollIndicatorOffset)(
      offsetY.value >= endAnimationValue ? initialHeaderHeight.value : 0,
    )

    const headerHeight = initialHeaderHeight.value
    const translateX = (headerHeight * scale - headerHeight) / 2

    return {
      transform: [
        {
          scale,
        },
        { translateX },
      ],
      opacity: interpolate(
        offsetY.value,
        [startAnimationValue, endAnimationValue],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    }
  }, [startAnimationValue, endAnimationValue])

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffsetY = event.nativeEvent.contentOffset.y
      const measurementHeight = event.nativeEvent.layoutMeasurement.height
      const contentSizeHeight = event.nativeEvent.contentSize.height

      offsetY.value = currentOffsetY

      setScrollEnd(contentSizeHeight <= currentOffsetY + measurementHeight)
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

  return {
    offsetY,
    onScroll,
    ListHeaderComponent,
    scrollIndicatorOffset,
    hasScrollToEnd,
  }
}
