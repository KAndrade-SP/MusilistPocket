import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './CustomDrawerContent'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import Header from '../components/Header'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

const AppNavigator = () => {
  return <DrawerNavigator />
}

export default AppNavigator
