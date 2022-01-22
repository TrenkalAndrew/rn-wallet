import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type TRootStackParamList = {
  Main: undefined
}

export type TRootStackRouteNames = keyof TRootStackParamList

export type TWelcomeOnboardingScreenProps = NativeStackScreenProps<
  TRootStackParamList,
  'Main'
>
