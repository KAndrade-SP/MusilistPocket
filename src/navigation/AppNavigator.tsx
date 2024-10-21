import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from './CustomDrawerContent'
import { useTheme } from 'styled-components'

import Header from '../components/Header'
import CompletedScreen from '../screens/CompletedScreen/CompletedScreen'
import PlanningScreen from '../screens/PlanningScreen/PlanningScreen'
import DroppedScreen from '../screens/DroppedScreen/DroppedScreen'
import { IconAlertCircle, IconClipboardList, IconMusicCheck, IconVolumeOff } from '@tabler/icons-react-native'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

  const theme = useTheme()

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) =>({
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

          return <IconComponent color={color} size={size} />;
        },
      })}
    >
      <Drawer.Screen name="Completed" component={CompletedScreen} />
      <Drawer.Screen name="Planning" component={PlanningScreen} />
      <Drawer.Screen name="Dropped" component={DroppedScreen} />
    </Drawer.Navigator>
  )
}

const AppNavigator = () => {
  return <DrawerNavigator />
}

export default AppNavigator
