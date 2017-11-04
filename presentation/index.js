import React from 'react'
import { Deck, Slide, Heading, Link, Text, Image } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import preloader from 'spectacle/lib/utils/preloader'

require('normalize.css')
require('spectacle/lib/themes/default/index.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#97BA73',
    quartenary: '#CECECE'
  },
  {
    primary: 'Helvetica',
    secondary: 'Helvetica'
  }
)

const images = {
  link: require('./link.png')
}

preloader(images)

const sections = [
  require('./00_about_me').default,
  require('./01_intro_debug_remotely').default,
  require('./02_rndebugger').default,
  require('./03_redux_devtools_ext').default,
  require('./04_react_devtools').default,
  require('./05_rndebugger_future').default
]

const transition = ['slide']

export default () => (
  <Deck
    transition={transition}
    transitionDuration={500}
    theme={theme}
    progress="number"
    controls={false}
  >
    <Slide bgColor="secondary">
      <Heading size={1} fit textColor="primary">
        Improve debugging experience on
      </Heading>
      <Heading size={3} textColor="primary" margin="30px">
        React Native
      </Heading>
    </Slide>

    <Slide bgColor="secondary">
      <Heading
        size={4}
        bold={false}
        textColor="tertiary"
        style={{ letterSpacing: 4 }}
      >
        http://jhen.tw/jsdc2017
      </Heading>
      <Image margin="45px 0" width={400} src={images.link} />
      <Heading
        size={6}
        bold={false}
        textColor="tertiary"
        style={{ letterSpacing: 4 }}
      >
        <Link>https://github.com/jhen0409/jsdc2017</Link>
      </Heading>
    </Slide>

    {sections}

    <Slide bgColor="secondary">
      <Heading size={3} textColor="primary" margin="120px">
        Thanks!
      </Heading>
      <div style={{ position: 'absolute', right: 0, left: 0, bottom: 0 }}>
        <Text textSize={24} textColor="primary">
          @jhen0409 on GitHub
        </Text>
        <Text textSize={24} textColor="primary">
          @jhen_jie on Twitter
        </Text>
      </div>
    </Slide>
  </Deck>
)
