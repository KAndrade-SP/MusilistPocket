import { IconFilter, IconMenuDeep, IconMusicSearch } from '@tabler/icons-react-native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

const HeaderContainer = styled.View`
  ${({ theme: { colors, spacing } }) => `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: ${spacing.md}px;
    background-color: ${colors.grayBackground};
  `}
`

const HeaderTitle = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.bold};
    font-size: ${typography.fontSize.medium}px;
    color: ${colors.lightPurple};
  `}
`

const HeaderSubtitle = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.regular};
    font-size: ${typography.fontSize.small}px;
    color: ${colors.textWhite};
  `}
`

const MenuIcon = styled(IconMenuDeep)`
  ${({ theme: { colors } }) => `
    color: ${colors.lightPurple};
    width: 24px;
    height: 24px;
  `}
`

const FilterIcon = styled(IconFilter)`
  ${({ theme: { colors } }) => `
    color: ${colors.lightPurple};
    width: 24px;
    height: 24px;
  `}
`

const SearchIcon = styled(IconMusicSearch)`
  ${({ theme: { colors } }) => `
    color: ${colors.lightPurple};
    width: 24px;
    height: 24px;
  `}
`

const Header = () => {

  const theme = useTheme()

  const styles = StyleSheet.create({
    navContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
    },
    titleContainer: {
      flexDirection: 'column',
    },
    iconContainer: {
      flexDirection: 'row',
      gap: theme.spacing.md,
    },
  })

  return (
    <HeaderContainer>
      <View style={styles.navContainer}>
        <TouchableOpacity>
          <MenuIcon />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <HeaderTitle>Title</HeaderTitle>
          <HeaderSubtitle>Subtitle</HeaderSubtitle>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FilterIcon />
        </TouchableOpacity>
        <TouchableOpacity>
          <SearchIcon />
        </TouchableOpacity>
      </View>
    </HeaderContainer>
  )
}

export default Header
