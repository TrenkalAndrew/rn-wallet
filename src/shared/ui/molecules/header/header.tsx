import React, { useState } from 'react'
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated'

import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/atoms'

const Wrapper = styled.View<{ isBorderVisible: boolean }>`
  padding: ${({ theme }) => theme.spacing(2.5)}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  background-color: ${({ theme }) => theme.palette.background.primary};
  border-bottom-color: ${({ theme, isBorderVisible }) =>
    isBorderVisible
      ? theme.palette.background.secondary
      : theme.palette.background.primary};
`

const StyledAnimatedView = styled(Animated.View)`
  z-index: 1;
`

export type THeader = {
  title: string
  offsetY: SharedValue<number>
  startAnimationValue?: number
  endAnimationValue?: number
}

export const Header = ({
  title,
  offsetY,
  startAnimationValue = 10,
  endAnimationValue = 20,
}: THeader) => {
  const [isBorderVisible, setBorderVisible] = useState(false)

  const styles = useAnimatedStyle(() => {
    runOnJS(setBorderVisible)(offsetY.value >= endAnimationValue)

    return {
      opacity: interpolate(
        offsetY.value,
        [startAnimationValue, endAnimationValue],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    }
  }, [startAnimationValue, endAnimationValue])

  return (
    <StyledAnimatedView style={styles}>
      <Wrapper isBorderVisible={isBorderVisible}>
        <Typography>{title}</Typography>
      </Wrapper>
    </StyledAnimatedView>
  )
}
