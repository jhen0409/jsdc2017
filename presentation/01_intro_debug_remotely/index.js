import React from 'react'
import {
  Heading,
  List,
  SlideSet,
  Slide,
  Text,
  CodePane,
  Image,
  Link,
  Notes
} from 'spectacle'
import preloader from 'spectacle/lib/utils/preloader'
import ListItem from '../components/listitem'

const images = {
  rndebugger: require('./rndebugger.png'),
  debugRemotelySimple: require('./debug-remotely-simple.png'),
  requirePolyfill: require('./require-polyfill.png')
}

preloader(images)

export default (
  <SlideSet key="intro_debug_remotely">
    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.rndebugger} />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger"
      >
        github.com/jhen0409/react-native-debugger
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary" notes="">
      <Heading size={6} textColor="primary" lineHeight={1}>
        How Debug Remotely works?
      </Heading>
      <Image src={images.debugRemotelySimple} />
      <Notes>
        First, simple explanation for normal mode and debug remotely.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary" margin="0 0 60px 0">
        Third party remote debugger
      </Heading>
      <List>
        <ListItem>
          Nuclide - Debugger of RN
          <Link
            target="_blank"
            href="https://github.com/facebook/nuclide/commit/fccd95d310d021ad67a6e524066bd9ab91e0e3ca"
            textColor="tertiary"
          >
            {' (removed)'}
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/Microsoft/vscode-react-native"
            textColor="tertiary"
          >
            vscode-react-native
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://blog.jetbrains.com/webstorm/2016/12/developing-mobile-apps-with-react-native-in-webstorm/"
          >
            WebStorm
          </Link>
        </ListItem>
        <ListItem>......</ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary" margin="0 0 60px 0">
        Standard Remote Debugger on Chrome
      </Heading>
      <List>
        <ListItem>http://localhost:8081/debugger-ui</ListItem>
        <ListItem>Run application script in WebWorker</ListItem>
      </List>
      <Notes>
        The standard remote debugger is included in react-native packager as web
        page.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary">
        Console
      </Heading>
      <Heading size={4} textColor="primary">
        Network
      </Heading>
      <Heading size={4} textColor="primary">
        Sources
      </Heading>
      <Heading size={4} textColor="primary">
        Memory
      </Heading>
      <Notes>
        The devtools tab we can use for debug remotely of React Native.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary">
        Console
      </Heading>
      <List>
        <ListItem>conosle.dir / console.table</ListItem>
        <ListItem>REPL: Global variables, `require` polyfill</ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.requirePolyfill} />
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Text margin="30px 0 15px" textSize={30} textColor="primary">
        Define module
      </Text>
      <CodePane
        textSize={24}
        lang="javascript"
        source={'/**\n * @providesModule MyModule\n */'}
      />
      <Text margin="30px 0 15px" textSize={30} textColor="primary">
        In console
      </Text>
      <CodePane
        textSize={24}
        lang="javascript"
        source={'> require(\'MyModule\')'}
      />
      <Notes>
        We could use this for `import` / `require` in code, or use `require`
        polyfill in console tab.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Text margin="30px 0 15px" textSize={30} textColor="primary">
        Debug Native module
      </Text>
      <CodePane
        textSize={24}
        lang="javascript"
        source={'> require(\'NativeModules\').MyNativeModule'}
      />
      <Notes>Of course, you can use it to debug native modules.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary" margin="0 0 60px 0">
        Network
      </Heading>
      <CodePane
        margin="0 0 20px 0"
        textSize={24}
        lang="javascript"
        source={require('raw-loader!./network-inspect-code')}
      />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/facebook/react-native/blob/0.45-stable/Libraries/Core/InitializeCore.js#L43-L53"
      >
        `original` property of window in WebWorker
      </Link>
      <Notes>
        Replace RN's XHR with WebWorker's XHR, so you can see the network
        request logs in Network tab of Chrome DevTools.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary" margin="0 0 60px 0">
        The limitations of Network
      </Heading>
      <List>
        <ListItem>CORS</ListItem>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://developer.mozilla.org/zh-TW/docs/Glossary/Forbidden_header_name"
          >
            Forbidden header name of browser
          </Link>
        </ListItem>
        <ListItem>The `uri` property of FormData</ListItem>
        <ListItem>......</ListItem>
      </List>
    </Slide>
  </SlideSet>
)
