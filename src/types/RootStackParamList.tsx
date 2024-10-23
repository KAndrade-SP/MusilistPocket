import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

export type RootStackParamList = {
  SignIn: undefined
  Main: undefined
  Search: undefined
  Profile: undefined
}

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>