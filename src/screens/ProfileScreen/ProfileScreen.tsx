import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import styled, { useTheme } from 'styled-components/native'

const ProfileContainer = styled.View`
  ${({ theme: { colors, spacing } }) => `
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: ${spacing.md}px;
    padding: ${spacing.xss}px ${spacing.md}px ${spacing.md}px;
    background-color: ${colors.grayBackground};
  `}
`

const UserImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`

const UserName = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.regular};
    font-size: ${typography.fontSize.medium}px;
    color: ${colors.textWhite};
  `}
`

const ActivityArea = styled.View`
  ${({ theme: { colors, spacing } }) => `
    background-color: ${colors.grayBackground};
    padding: ${spacing.xss}px ${spacing.xss}px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  `}
`

const ActivityStats = styled.View`
  ${({ theme: { spacing } }) => `
    flex-direction: row;
    justify-content: space-around;
    padding: 0 ${spacing.md}px ${spacing.md}px ${spacing.md}px;
  `}
`

const ActivityItem = styled.View`
  align-items: center;
`

const MetricValue = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.regular};
    font-size: ${typography.fontSize.medium}px;
    color: ${colors.lightPurple};
  `}
`

const MetricLabel = styled.Text`
  ${({ theme: { colors, typography } }) => `
    font-family: ${typography.fonts.regular};
    font-size: ${typography.fontSize.small}px;
    color: ${colors.textWhite};
  `}
`

const GenreOverviewArea = styled.View`
  ${({ theme: { spacing } }) => `
      flex-direction: row;
      justify-content: space-around;
      padding: ${spacing.md}px;
      margin: 0 ${spacing.lg}px ${spacing.lg}px;
      border: solid 1px;
      border-color: rgba(224, 192, 255, 0.5);
      box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  `}
`

const GenreDivisor = styled.View`
  ${({ theme: { spacing } }) => `
    gap: ${spacing.xs}px;
    align-items: center;
  `}
`

const GenreBox = styled.View`
  ${({ theme: { colors, spacing } }) => `
    color: ${colors.textWhite};
    border-radius: ${spacing.sm}px;
    background-color: ${colors.darkPurple};
    padding: ${spacing.xss}px ${spacing.sm}px;
  `}
`

const GenreEntries = styled.Text`
  ${({ theme: { colors, typography } }) => `
    color: ${colors.lightPurple};
    font-size: ${typography.fontSize.small}px;
    font-family: ${typography.fonts.bold};
  `}
`

const ProfileScreen = () => {
  const theme = useTheme()
  const { user } = useSelector((state: RootState) => state.auth)

  const styles = StyleSheet.create({
    profileScreen: {
      flex: 1,
      backgroundColor: theme.colors.grayBackground,
    },
    textGenre: {
      color: theme.colors.textWhite,
      fontFamily: theme.typography.fonts.regular,
      fontSize: theme.typography.fontSize.small,
    },
    textEntry: {
      color: theme.colors.lightPurple,
      fontFamily: theme.typography.fonts.regular,
    },
  })

  return (
    <View style={styles.profileScreen}>
      <ProfileContainer>
        <UserImage source={{ uri: user?.photoURL || 'https://via.placeholder.com/80' }} />
        <UserName>{user?.displayName}</UserName>
      </ProfileContainer>

      <ActivityArea>
        <ActivityStats>
          <ActivityItem aria-label="Total Songs">
            <MetricValue>999</MetricValue>
            <MetricLabel>Total Songs</MetricLabel>
          </ActivityItem>

          <ActivityItem aria-label="Days Listened">
            <MetricValue>99.9</MetricValue>
            <MetricLabel>Days Listened</MetricLabel>
          </ActivityItem>

          <ActivityItem aria-label="Mean Score">
            <MetricValue>99.9</MetricValue>
            <MetricLabel>Mean Score</MetricLabel>
          </ActivityItem>
        </ActivityStats>

        <GenreOverviewArea>
          <GenreDivisor>
            <GenreBox>
              <Text style={styles.textGenre}>Metal</Text>
            </GenreBox>
            <GenreEntries>
              999 <Text style={styles.textEntry}>Entries</Text>
            </GenreEntries>
          </GenreDivisor>

          <GenreDivisor>
            <GenreBox>
              <Text style={styles.textGenre}>Pop</Text>
            </GenreBox>
            <GenreEntries>
              999 <Text style={styles.textEntry}>Entries</Text>
            </GenreEntries>
          </GenreDivisor>

          <GenreDivisor>
            <GenreBox>
              <Text style={styles.textGenre}>K-Pop</Text>
            </GenreBox>
            <GenreEntries>
              999 <Text style={styles.textEntry}>Entries</Text>
            </GenreEntries>
          </GenreDivisor>
        </GenreOverviewArea>
      </ActivityArea>
    </View>
  )
}

export default ProfileScreen
