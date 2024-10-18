import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.body}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  body: {
    flex: 1,
  },
})

export default CustomDrawerContent
