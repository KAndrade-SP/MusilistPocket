import React from 'react'
import { CardContainer, ScreenContainer } from '../../styles/ScreenStyles'
import AlbumImage from '../../../assets/images/Album.jpg'
import MusicImage from '../../../assets/images/Music.jpg'
import { IconDisc, IconMusic } from '@tabler/icons-react-native'
import { useTheme } from 'styled-components'

const CompletedScreen = () => {

  const theme = useTheme()

  return (
    <ScreenContainer>
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="Album"
        progress="5/5"
        score="10"
      />
      <CardContainer 
        imageUrl={MusicImage}
        title="Ether"
        icon={<IconMusic size={12} color={theme.colors.textWhite}/>}
        type="Music"
        progress="1/1"
        score="8"
      />
      <CardContainer 
        imageUrl={AlbumImage}
        title="Elements"
        icon={<IconDisc size={12} color={theme.colors.textWhite}/>}
        type="Album"
        progress="5/5"
        score="9"
      />
      <CardContainer 
        imageUrl={MusicImage}
        title="Ether"
        icon={<IconMusic size={12} color={theme.colors.textWhite}/>}
        type="Music"
        progress="1/1"
        score="10"
      />
    </ScreenContainer>
  )
}

export default CompletedScreen