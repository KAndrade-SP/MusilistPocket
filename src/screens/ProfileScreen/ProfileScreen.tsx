import React from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { logout } from '../../redux/reducers/authSlice'

const ProfileScreen = () => {
  
  const dispatch = useDispatch<AppDispatch>()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View>
      <Text>Welcome, {user?.displayName}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}

export default ProfileScreen
