import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import CustomDrawerContent from './CustomDrawerContent'
import { useTheme } from 'styled-components'

import Header from '../components/Header'
import CompletedScreen from '../screens/CompletedScreen/CompletedScreen'
import PlanningScreen from '../screens/PlanningScreen/PlanningScreen'
import DroppedScreen from '../screens/DroppedScreen/DroppedScreen'
import {
  IconAlertCircle,
  IconArrowBackUp,
  IconClipboardList,
  IconMusicCheck,
  IconVolumeOff,
} from '@tabler/icons-react-native'
import SearchScreen from '../screens/SearchScreen.tsx/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 16,
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

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerLeft: () => (
            <View style={styles.headerLeftContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconArrowBackUp size={24} color={theme.colors.lightPurple} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: theme.colors.grayBackground,
            height: 70,
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
                <IconArrowBackUp size={24} color={theme.colors.lightPurple} />
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: theme.colors.grayBackground,
            height: 70,
          },
          headerTitleStyle: {
            fontFamily: theme.typography.fonts.bold,
            fontSize: theme.typography.fontSize.large,
          },
          headerTintColor: theme.colors.lightPurple,
        }}
      />
    </Stack.Navigator>
  )
}

const AppNavigator = () => {
  return <MainStackNavigator />
}

export default AppNavigator
