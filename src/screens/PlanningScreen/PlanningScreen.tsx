import React from 'react'
import { CardContainer, ScreenContainer } from '../../styles/ScreenStyles'
import AlbumImage from '../../../assets/images/Album.jpg'
import MusicImage from '../../../assets/images/Music.jpg'
import { IconDisc, IconMusic } from '@tabler/icons-react-native'
import { useTheme } from 'styled-components'

const PlanningScreen = () => {

  const theme = useTheme()

  return (
    <ScreenContainer>
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="Album"
        progress="0/5"
        score="-"
      />
      <CardContainer 
        imageUrl={MusicImage}
        title="Ether"
        icon={<IconMusic size={12} color={theme.colors.textWhite}/>}
        type="Music"
        progress="0/1"
        score="-"
      />
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="Album"
        progress="0/5"
        score="-"
      />
      <CardContainer 
        imageUrl={MusicImage}
        title="Ether"
        icon={<IconMusic size={12} color={theme.colors.textWhite}/>}
        type="Music"
        progress="0/1"
        score="-"
      />
    </ScreenContainer>
  )
}

export default PlanningScreen