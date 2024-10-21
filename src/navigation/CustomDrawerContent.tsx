import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { useTheme } from 'styled-components'

const CustomDrawerContent = (props: any) => {

  const theme = useTheme()

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: theme.colors.darkBackground,
      padding: theme.spacing.md,
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
        <Image
          source={{ uri: 'https://via.placeholder.com/80' }}
          style={styles.userImage}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      <View style={styles.body}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent
