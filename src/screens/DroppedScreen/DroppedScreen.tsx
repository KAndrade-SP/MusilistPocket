import React from 'react'
import { CardContainer, ScreenContainer } from '../../styles/ScreenStyles'
import AlbumImage from '../../../assets/images/Album.jpg'
import { IconDisc } from '@tabler/icons-react-native'
import { useTheme } from 'styled-components'

const DroppedScreen = () => {

  const theme = useTheme()

  return (
    <ScreenContainer>
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="Album"
        progress="4/10"
        score="1"
      />
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="EP"
        progress="1/5"
        score="4"
      />
    </ScreenContainer>
  )
}

export default DroppedScreen