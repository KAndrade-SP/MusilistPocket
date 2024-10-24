import { DrawerNavigationProp } from '@react-navigation/drawer/lib/typescript/src/types'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { IconFilter, IconMenuDeep, IconMusicSearch } from '@tabler/icons-react-native'
import React, { useCallback, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

const HeaderContainer = styled.View`
  ${({ theme: { colors, spacing } }) => `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.md}px;
    background-color: ${colors.purplePrimary};
  `}
`

const HeaderTitle = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.bold};
    font-size: ${typography.fontSize.medium}px;
    color: ${colors.textWhite};
  `}
`

const HeaderSubtitle = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.regular};
    font-size: ${typography.fontSize.small}px;
    color: ${colors.lightPurple};
  `}
`

const MenuIcon = styled(IconMenuDeep)`
  ${({ theme: { colors } }) => `
    color: ${colors.textWhite};
  `}
`

const FilterIcon = styled(IconFilter)`
  ${({ theme: { colors } }) => `
    color: ${colors.textWhite};
  `}
`

const SearchIcon = styled(IconMusicSearch)`
  ${({ theme: { colors } }) => `
    color: ${colors.textWhite};
  `}
`

type DrawerNavigation = DrawerNavigationProp<any>

const Header = () => {
  const theme = useTheme()
  const navigation = useNavigation<DrawerNavigation>()
  const [subtitle, setSubtitle] = useState<string>('Subtitle')

  useFocusEffect(
    useCallback(() => {
      const routeName = navigation.getState().routes[navigation.getState().index].name
      setSubtitle(routeName)
    }, [navigation])
  )

  const styles = StyleSheet.create({
    navContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
    },
    titleContainer: {
      flexDirection: 'column',
      gap: theme.spacing.xss,
    },
    iconContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
    },
  })

  return (
    <HeaderContainer>
      <View style={styles.navContainer}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.toggleDrawer()}>
          <MenuIcon size={30} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <HeaderTitle>Song list</HeaderTitle>
          <HeaderSubtitle>{subtitle}</HeaderSubtitle>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.5}>
          <FilterIcon size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Search')
          }}
        >
          <SearchIcon size={30} />
        </TouchableOpacity>
      </View>
    </HeaderContainer>
  )
}

export default Header
