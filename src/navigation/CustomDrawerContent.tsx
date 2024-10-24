import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useTheme } from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const CustomDrawerContent = (props: any) => {
  const theme = useTheme()
  const { navigation } = props
  const { user } = useSelector((state: RootState) => state.auth)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.purplePrimary,
      padding: theme.spacing.md,
      marginTop: -5,
      alignItems: 'flex-start',
    },
    userImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
      marginBottom: theme.spacing.xsm,
    },
    userName: {
      color: theme.colors.textWhite,
      fontSize: theme.typography.fontSize.large,
      fontFamily: theme.typography.fonts.semibold,
    },
    body: {
      flex: 1,
      paddingTop: theme.spacing.sm,
    },
  })

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('Profile')
          }}
        >
          <Image
            source={{ uri: user?.photoURL || 'https://via.placeholder.com/80'}}
            style={styles.userImage}
          />
        </TouchableOpacity>
        <Text style={styles.userName}>{user?.displayName}</Text>
      </View>

      <View style={styles.body}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
