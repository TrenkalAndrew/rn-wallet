import { styled } from '@shared/ui/theme'

export const Divider = styled.View<{ color?: string }>`
  height: 1px;
  background-color: ${({ theme, color }) =>
    color ?? theme.palette.background.secondary};
`
