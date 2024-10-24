import { IconStar } from '@tabler/icons-react-native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styled, { useTheme } from 'styled-components'

interface CardProps {
  imageUrl: string
  title: string
  icon: React.ReactNode
  type: string
  progress: string
  score: string
}

export const ScreenContainer = styled(View)`
  ${({ theme: { colors } }) => `
    flex: 1;
    background-color: ${colors.darkBackground};
  `}
`

export const ImageBox = styled(Image)`
  ${({ theme: { spacing } }) => `
    width: 100px;
    height: 100px;
    margin-left: -${spacing.md}px;
    resizeMode: 'cover';
    border-top-left-radius: ${spacing.xss}px;
    border-bottom-left-radius: ${spacing.xss}px;
  `}
`

export const TitleValue = styled(Text)`
  ${({ theme: { colors, typography } }) => `
    font-size: ${typography.fontSize.large}px;
    font-family: ${typography.fonts.semiBold};
    color: ${colors.textWhite};
  `}
`

export const TypeValue = styled(Text)`
  ${({ theme: { colors, typography } }) => `
    font-size: ${typography.fontSize.small}px;
    font-family: ${typography.fonts.regular};
    color: ${colors.textWhite};
  `}
`

export const ScoreValue = styled(Text)`
  ${({ theme: { colors, typography } }) => `
    font-size: ${typography.fontSize.small}px;
    font-family: ${typography.fonts.bold};
    color: ${colors.textWhite};
  `}
`

export const ProgressValue = styled(Text)`
  ${({ theme: { colors, typography } }) => `
    font-size: ${typography.fontSize.xLarge}px;
    font-family: ${typography.fonts.bold};
    color: ${colors.lightPurple};
  `}
`

export const CardContainer: React.FC<CardProps> = ({
  imageUrl,
  title,
  icon,
  type,
  progress,
  score,
}) => {
  const theme = useTheme()

  const styles = StyleSheet.create({
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: theme.spacing.xss,
      padding: theme.spacing.md,
      margin: theme.spacing.sm,
      marginTop: theme.spacing.md,
      marginBottom: theme.spacing.none,
      shadowColor: theme.colors.purpleSecondary,
      shadowOpacity: 0.7,
      shadowRadius: 1,
      elevation: 5,
      position: 'relative',
      height: 100,
    },
    cardTextContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    cardTitleContainer: {
      alignItems: 'flex-start',
      marginLeft: theme.spacing.md,
      gap: theme.spacing.sm,
    },
    cardTypeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
  })

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <LinearGradient
        colors={[theme.colors.purplePrimary, theme.colors.purpleSecondary]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.cardContainer}
      >
        <ImageBox source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl} />

        <View style={styles.cardTextContainer}>
          <View style={styles.cardTitleContainer}>
            <TitleValue>{title}</TitleValue>

            <View style={styles.cardTypeContainer}>
              {icon}
              <TypeValue>{type}</TypeValue>
            </View>

            <View style={styles.cardTypeContainer}>
              <IconStar size={12} color={theme.colors.textWhite} />
              <ScoreValue>{score}</ScoreValue>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.5}>
            <ProgressValue>{progress}</ProgressValue>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}
