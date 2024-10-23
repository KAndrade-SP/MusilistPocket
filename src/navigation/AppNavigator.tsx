import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import auth from '@react-native-firebase/auth'
import { logout, setUser } from '../redux/reducers/authSlice'
import { RootStackParamList } from '../types/RootStackParamList'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import CustomDrawerContent from './CustomDrawerContent'

import { useTheme } from 'styled-components'

import {
  IconAlertCircle,
  IconArrowBackUp,
  IconClipboardList,
  IconLogout,
  IconMusicCheck,
  IconVolumeOff,
} from '@tabler/icons-react-native'

import Header from '../components/Header'
import CompletedScreen from '../screens/CompletedScreen/CompletedScreen'
import PlanningScreen from '../screens/PlanningScreen/PlanningScreen'
import DroppedScreen from '../screens/DroppedScreen/DroppedScreen'
import SearchScreen from '../screens/SearchScreen.tsx/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'
import SignInScreen from '../screens/SignInScreen/SignInScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator<RootStackParamList>()

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRightContainer: {
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const DrawerNavigator = () => {
  const theme = useTheme()

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        header: () => <Header />,
        drawerStyle: {
          backgroundColor: theme.colors.grayBackground,
        },
        drawerActiveBackgroundColor: 'transparent',
        drawerActiveTintColor: theme.colors.lightPurple,
        drawerInactiveTintColor: theme.colors.textWhite,
        drawerLabelStyle: {
          fontFamily: theme.typography.fonts.regular,
          marginLeft: -theme.spacing.xsm,
        },
        drawerIcon: ({ color, size }) => {
          let IconComponent
          if (route.name === 'Completed') {
            IconComponent = IconMusicCheck
          } else if (route.name === 'Planning') {
            IconComponent = IconClipboardList
          } else if (route.name === 'Dropped') {
            IconComponent = IconVolumeOff
          } else {
            IconComponent = IconAlertCircle
          }

          return <IconComponent color={color} size={size} />
        },
      })}
    >
      <Drawer.Screen name="Completed" component={CompletedScreen} />
      <Drawer.Screen name="Planning" component={PlanningScreen} />
      <Drawer.Screen name="Dropped" component={DroppedScreen} />
    </Drawer.Navigator>
  )
}

const MainStackNavigator = () => {
  const theme = useTheme()
  const navigation = useNavigation()

  const { user } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const initializing = useSelector((state: RootState) => state.auth.initializing)

  const handleLogout = () => {
    dispatch(logout())
  }

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        )
      } else {
        dispatch(setUser(null))
      }
    })

    return () => unsubscribe()
  }, [dispatch])

  if (initializing) {
    return <Text>Loading...</Text>
  }

  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: 'Search',
              headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconArrowBackUp size={30} color={theme.colors.lightPurple} />
                  </TouchableOpacity>
                </View>
              ),
              headerStyle: {
                backgroundColor: theme.colors.grayBackground,
                height: 70,
                shadowColor: 'transparent',
                elevation: 0,
              },
              headerTitleStyle: {
                fontFamily: theme.typography.fonts.bold,
                fontSize: theme.typography.fontSize.large,
              },
              headerTintColor: theme.colors.lightPurple,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              headerLeft: () => (
                <View style={styles.headerLeftContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconArrowBackUp size={30} color={theme.colors.lightPurple} />
                  </TouchableOpacity>
                </View>
              ),
              headerRight: () => (
                <View style={styles.headerRightContainer}>
                  <TouchableOpacity onPress={handleLogout}>
                    <IconLogout size={30} color={theme.colors.lightPurple} />
                  </TouchableOpacity>
                </View>
              ),
              headerStyle: {
                backgroundColor: theme.colors.grayBackground,
                height: 70,
                shadowColor: 'transparent',
                elevation: 0,
              },
              headerTitleStyle: {
                fontFamily: theme.typography.fonts.bold,
                fontSize: theme.typography.fontSize.large,
              },
              headerTintColor: theme.colors.lightPurple,
            }}
          />
        </>
      ) : (
        <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return <MainStackNavigator />
}

export default AppNavigator
