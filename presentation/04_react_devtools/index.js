import React from 'react'
import {
  Heading,
  List,
  Slide,
  SlideSet,
  Notes,
  Text,
  CodePane,
  Image,
  Link
} from 'spectacle'
import ListItem from '../components/listitem'

const images = {
  electronShell: require('./electron-shell.png'),
  consolidatePackages: require('./consolidate-packages.png'),
  rnSupport: require('./rn-support.png'),
  styleEditor: require('./style-editor.png'),
  contributors: require('./contributors-01-11.png'),
  changePortInRN: require('./change-port-in-rn.png')
}

export default (
  <SlideSet key="react_devtools">
    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary">
        React Developer Tools
      </Heading>
      <Text margin="30px 0 0 0" textSize={36} textColor="primary">
        The Chrome Extension doesn't work for React Native since v0.12 (Oct 9,
        2015)
      </Text>
      <Notes>
        0.12 breaking change: Move JS runtime of remote debugger into WebWorker.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.electronShell} />
      <Link
        target="_blank"
        href="https://github.com/facebook/react-devtools/issues/489"
        margin="10px 0 0 0"
        textSize={24}
        textColor="tertiary"
      >
        The standalone app of react-devtools (21 Apr, 2016)
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.rnSupport} />
      <Link
        target="_blank"
        href="https://github.com/facebook/react-native/commit/9a93a3cba47722a590a8912a5ace1c479eb4178a#diff-31cd378efa6368c1a37db84beec02002"
        margin="10px 0 0 0"
        textSize={24}
        textColor="tertiary"
      >
        React Native support for the standalone app (0.15)
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        React DevTools for RN we can use at 2016
      </Heading>
      <List>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://nuclide.io/docs/platforms/react-native/#element-inspector"
          >
            Nuclide - React Native Inspector
          </Link>
        </ListItem>
        <ListItem>Build from source code</ListItem>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://github.com/jhen0409/react-native-debugger/commit/cf457c16eb882fb859f37b220e1bce99a6475640"
          >
            react-native-debugger (May 30, 2016)
          </Link>
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          href="http://facebook.github.io/react-native/releases/0.45/docs/debugging.html#react-developer-tools"
          textColor="tertiary"
        >
          Still undocumented until React Native 0.45
        </Link>
      </Heading>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image margin="0 0 0 0" src={images.consolidatePackages} />
      <Link
        target="_blank"
        href="https://github.com/facebook/react-devtools/issues/489"
        textSize={24}
        textColor="tertiary"
      >
        Consolidate packages
      </Link>
      <Notes>We use fork until react-native-core release.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image width={625} src={images.contributors} />
      <br />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/facebook/react-devtools/graphs/contributors?from=2017-01-11&to=2017-11-02&type=c"
      >
        Jan 11, 2017 – Nov 2, 2017
      </Link>
      <Notes>Positive development starts in this year.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary" margin="20px 0 0 0">
        <Link
          target="_blank"
          href="https://www.npmjs.com/package/react-devtools-core"
          textColor="tertiary"
        >
          react-devtools-core
        </Link>
      </Heading>
      <Heading size={5} textColor="primary" margin="20px 0 0 0">
        <Link
          target="_blank"
          href="https://www.npmjs.com/package/react-devtools"
          textColor="tertiary"
        >
          react-devtools
        </Link>
      </Heading>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Text margin="0 0 10px" textSize={30} textColor="primary">
        JavaScript runtime that support WebSocket
      </Text>
      <CodePane
        textSize={24}
        lang="javascript"
        source={
          'require(\'react-devtools-core\').connectToDevTools({\n  host,\n  port,\n  resolveRNStyle\n})'
        }
      />
      <Text margin="20px 0 10px" textSize={30} textColor="primary">
        Electron renderer
      </Text>
      <CodePane
        textSize={24}
        lang="javascript"
        source={
          'require(\'react-devtools-core/standalone\')\n  .setContentDOMNode(document.getElementById(\'container\'))\n  .startServer(port);'
        }
      />
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary">
        Specified features for React Native
      </Heading>
      <List>
        <ListItem>Style editor</ListItem>
        <ListItem>
          {'Box inspect in Style editor ('}
          <Link
            target="_blank"
            href="https://github.com/facebook/react-devtools/pull/590"
            textColor="tertiary"
          >
            #590
          </Link>
          {', '}
          <Link
            target="_blank"
            href="https://github.com/facebook/react-devtools/pull/671"
            textColor="tertiary"
          >
            #671
          </Link>
          {')'}
        </ListItem>
        <ListItem>
          {'Open file in editor by click `Show Source` or source link ('}
          <Link
            target="_blank"
            href="https://github.com/facebook/react-devtools/pull/588"
            textColor="tertiary"
          >
            #588
          </Link>
          {', '}
          <Link
            target="_blank"
            href="https://github.com/facebook/react-devtools/pull/633"
            textColor="tertiary"
          >
            #633
          </Link>
          {')'}
        </ListItem>
      </List>
      <Notes>
        In addition to Style Editor, I submitted two PR for implement these
        features.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.styleEditor} />
      <Notes>
        I referenced the built-in inspector implementation of RN for build box
        inspect in style editor.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src="https://cloud.githubusercontent.com/assets/3001525/24081771/a5562680-0cf4-11e7-9cbb-99fb35f76dcf.gif" />
      <Notes>
        Inspired by react-native packager, we could request
        `http://localhost:8081/open-stack-frame` to open file in editor.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary">
        React DevTools in RNDebugger
      </Heading>
      <List>
        <ListItem textSize={36}>
          Random port (Set `__REACT_DEVTOOLS_PORT__`)
        </ListItem>
        <ListItem textSize={36}>
          Change default theme depends Chrome DevTools
        </ListItem>
      </List>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.changePortInRN} />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/facebook/react-native/pull/10522"
      >
        Make react-devtools port can be changed
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/react-devtools-integration.md#change-theme-of-chrome-devtools-with-react-devtools-together"
      >
        <Image src="https://user-images.githubusercontent.com/3001525/29600011-f0782798-8798-11e7-88cf-98f50e24199d.gif" />
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <List>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/jhen0409/react-native-debugger/issues/147"
            textColor="tertiary"
          >
            FlatList memory issue (#147)
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/jhen0409/react-native-debugger/issues/139"
            textColor="tertiary"
          >
            May cause Android performance issues (#139)
          </Link>
        </ListItem>
      </List>
    </Slide>
  </SlideSet>
)
