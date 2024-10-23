import React, { useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithGoogle } from '../../redux/reducers/authSlice'
import { AppDispatch, RootState } from '../../redux/store'
import { useNavigation } from '@react-navigation/native'
import { NavigationProp } from '../../types/RootStackParamList'

const SignInScreen = () => {
  
  const dispatch = useDispatch<AppDispatch>()
  const { user, loading, error } = useSelector((state: RootState) => state.auth)

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle())
  }

  const navigation = useNavigation<NavigationProp>()

  useEffect(() => {
    if (user) {
      navigation.navigate('Main')
    }
  }, [user, navigation])

  return (
    <View style={{ backgroundColor: 'black' }}>
      <Button
        title="Sign in with Google"
        onPress={handleGoogleLogin}
        disabled={loading}
      />

      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  )
}

export default SignInScreen
