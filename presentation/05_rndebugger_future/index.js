import React from 'react'
import {
  Heading,
  List,
  Link,
  Notes,
  Slide,
  SlideSet,
  Text,
  Image
} from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import ListItem from '../components/listitem'

const images = {
  debugRemotelySimple: require('../01_intro_debug_remotely/debug-remotely-simple.png'),
  mergeDebuggerProxy: require('./merge-debugger-proxy.png'),
  v08: require('./v0.8.png'),
  browserMemoryBefore: require('./browser-memory-before.png'),
  browserMemoryAfter: require('./browser-memory-after.png'),
  rndebuggerMemoryBefore: require('./rndebugger-memory-before.png'),
  rndebuggerMemoryAfter: require('./rndebugger-memory-after.png')
}

preloader(images)

export default (
  <SlideSet key="rndebugger_future">
    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.v08} />
      <Link
        target="_blank"
        href="https://github.com/jhen0409/react-native-debugger/milestone/11"
        textColor="tertiary"
      >
        RNDebugger v0.8 milestone
      </Link>
      <Notes>
        <List>
          <ListItem>Root config file</ListItem>
          <ListItem>Upgrade to Redux DevTools Extension v3</ListItem>
          <ListItem>Sync action / state between deubggger windows</ListItem>
          <ListItem>Add apollo-client-devtools</ListItem>
          <ListItem>Upgrade Electron (Chromium version)</ListItem>
        </List>
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          textColor="tertiary"
          href="https://github.com/jhen0409/react-native-debugger/issues/151"
        >
          Electron 1.8 memory issue (Chrome >= 59)
        </Link>
      </Heading>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.browserMemoryBefore} />
      <Text textSize={24} textColor="primary">
        Continuous reload JS 30 times:
      </Text>
      <Image src={images.browserMemoryAfter} />
      <Text textColor="primary">
        Standard remote debugger with Chrome 62 beta
      </Text>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.rndebuggerMemoryBefore} />
      <Text textSize={24} textColor="primary">
        Continuous reload JS 30 times:
      </Text>
      <Image src={images.rndebuggerMemoryAfter} />
      <Text textColor="primary">RNDebugger (0.7.x)</Text>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Merge debugger proxy into client
      </Heading>
      <Image src={images.debugRemotelySimple} />
      <Notes>(Before)</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          href="https://github.com/jhen0409/react-native-debugger/issues/174"
          textColor="tertiary"
        >
          Merge debugger proxy into client
        </Link>
      </Heading>
      <Image src={images.mergeDebuggerProxy} />
      <Notes>
        (After) We could merge the debugger proxy, this will reduce the cost of
        connection with react-native app
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          href="https://github.com/jhen0409/react-native-debugger/issues/141"
          target="_blank"
          textColor="tertiary"
        >
          Resolve Haul issues
        </Link>
      </Heading>
      <Notes>
        Haul is great React Native bundler that hug Webpack community, I'm
        considering use it in the future. Currently it doesn't support like
        REACT_DEBUGGER and `require` polyfill, so some RNDebugger features
        doesn't work.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Build custom Electron for RNDebugger
      </Heading>
      <List>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/electron/libchromiumcontent"
            textColor="tertiary"
          >
            electron/libchromiumcontent
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/electron/electron"
            textColor="tertiary"
          >
            electron/electron
          </Link>
        </ListItem>
      </List>
      <Notes>
        We could do more things for Chrome DevTools, this makes senseif we want
        to improve it more deeply. But we may need more resources and supports.
      </Notes>
    </Slide>
  </SlideSet>
)
