import React from 'react'
import { Button, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithGoogle, logout } from '../../redux/reducers/authSlice'
import { AppDispatch, RootState } from '../../redux/store'

const SignInScreen = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { user, loading, error } = useSelector((state: RootState) => state.auth)

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle())
  }

  const handleLogOut = () => {
    dispatch(logout())
  }

  return (
    <View>
      {user ? (
        <View>
          <Text>Welcome, {user.displayName}</Text>
          <Button title="Sair" onPress={handleLogOut} />
        </View>
      ) : (
        <Button
          title="Sign in with Google"
          onPress={handleGoogleLogin}
          disabled={loading}
        />
      )}
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
    </View>
  )
}

export default SignInScreen
