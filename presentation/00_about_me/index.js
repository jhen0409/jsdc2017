import React from 'react'
import { Heading, Slide, List, Text, Image } from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import ListItem from '../components/listitem'

const images = {
  profile: require('./jhen-profile.jpg'),
  mybigday: require('./mybigday.png')
}

preloader(images)

export default (
  <Slide key="about_me" bgColor="secondary" textColor="primary">
    <div style={{ display: 'flex', paddingLeft: 32, paddingRight: 32 }}>
      <List style={{ flex: 2, alignSelf: 'center' }}>
        <ListItem textSize={32}>Jhen</ListItem>
        <ListItem textSize={32}>@jhen0409 on GitHub</ListItem>
        <ListItem textSize={32}>@jhen_jie on Twitter</ListItem>
      </List>
      <div style={{ flex: 1 }}>
        <Image width={300} src={images.profile} />
      </div>
    </div>
    <div style={{ display: 'flex', paddingLeft: 32, paddingRight: 32 }}>
      <List style={{ flex: 2, alignSelf: 'center' }}>
        <ListItem textSize={32}>@mybigday on GitHub</ListItem>
      </List>
      <div style={{ flex: 1 }}>
        <Image
          style={{ backgroundColor: 'white', padding: 8 }}
          width={300}
          src={images.mybigday}
        />
      </div>
    </div>
  </Slide>
)
