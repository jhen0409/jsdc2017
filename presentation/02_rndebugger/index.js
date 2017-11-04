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
import preloader from 'spectacle/lib/utils/preloader'
import ListItem from '../components/listitem'

const images = {
  devToolsInWeb: require('./devtools-in-web.png'),
  devToolsWindows: require('./devtools-windows.png'),
  remotedevRNDebugger: require('./remotedev-rn-debugger.png'),
  removeTabsAndContextBefore: require('./remove-tabs-and-context-before.png'),
  removeTabsAndContext: require('./remove-tabs-and-context.png'),
  rndebugger: require('../01_intro_debug_remotely/rndebugger.png')
}

preloader(images)

export default (
  <SlideSet key="rndebugger">
    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        I often use these tools in Web development
      </Heading>
      <List>
        <ListItem>Browser DevTools</ListItem>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://github.com/facebook/react-devtools"
          >
            github.com/facebook/react-devtools
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            textColor="tertiary"
            href="https://github.com/zalmoxisus/redux-devtools-extension"
          >
            github.com/zalmoxisus/redux-devtools-extension
          </Link>
        </ListItem>
      </List>
      <Image margin="-20px 0 0 0" src={images.devToolsInWeb} />
      <Notes />
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.devToolsWindows} />
      <Notes>
        In my experience, these are not easy to boostrapping for React Native.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <CodePane
        margin="30px 0 0 0"
        textSize={24}
        lang="bash"
        source={'$ npm i -g react-devtools\n$ react-devtools'}
      />
      <Notes>We now have react-devtools package.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <CodePane
        margin="30px 0 0 0"
        textSize={24}
        lang="bash"
        source={
          '$ npm i -g remotedev-server\n$ remotedev-server --port 8000\n\n# In your project\n$ npm i --save-dev remote-redux-devtools'
        }
      />
      <Text margin="30px 0 0 0" textSize={30} textColor="primary">
        Click `Remote` button in Redux DevTools Extension
      </Text>
      <Notes>
        <List>
          <ListItem>It's remove version of Redux DevTools</ListItem>
          <ListItem>
            If you don't use custom remotedev-server, it will used
            `remotedev.io`, it may slow than local server and it used IP to
            separate data
          </ListItem>
        </List>
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.remotedevRNDebugger} margin="0 0 -30px" />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/remotedev-rn-debugger"
      >
        github.com/jhen0409/remotedev-rn-debugger
      </Link>
      <Text margin="10px 0 0 0" textSize={24} textColor="primary">
        (formerly remote-redux-devtools-on-debugger)
      </Text>
      <Notes>
        This is my first integration, it's very easy to use in standard remote
        debugger.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <CodePane
        margin="30px 0 0 0"
        textSize={24}
        lang="bash"
        source={
          '$ npm i --save-dev remote-redux-devtools \\\n    remotedev-rn-debugger'
        }
      />
      <Text margin="30px 0 15px" textSize={30} textColor="primary">
        In package.json
      </Text>
      <CodePane
        textSize={20}
        lang="javascript"
        source={
          '{\n  "scripts": {\n    "postinstall": "remotedev-debugger --injectserver --port 8000"\n  }\n}'
        }
      />
      <Notes>
        It injected in standard remote debugger, and injected `remotedev-server`
        in react-native packager.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src={images.rndebugger} />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger"
      >
        github.com/jhen0409/react-native-debugger
      </Link>
      <Notes>I start the project and using it one year.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={3} textColor="primary">
        Use Electron
      </Heading>
      <List>
        <ListItem>Do more, get rid of browser limitations</ListItem>
        <ListItem>Locking Chromium version</ListItem>
      </List>
      <Notes>
        I tried get rid for some UX issues and limitations for standard remote
        debugger, and it successfull. Chromium upgrade may causes some problems.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary">
        Changes of Chrome DevTools
      </Heading>
      <List>
        <ListItem textSize={40}>Closed unnecessary tabs</ListItem>
        <ListItem textSize={40}>
          Use `RNDebuggerWorker.js` context by default
        </ListItem>
      </List>
      <Image src={images.removeTabsAndContextBefore} />
      <Image src={images.removeTabsAndContext} />
      <Notes>
        <List>
          <ListItem>
            I tried make devtools simpley by the global devtools API, have
            someone was confused for the devtools tabs. Keep `Application` tab
            for clear cookies if use Network Inspect.
          </ListItem>
          <ListItem>Use `top` context by default is not make sense.</ListItem>
        </List>
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary">
        Resolve Network limitations
      </Heading>
      <List>
        <ListItem>CORS</ListItem>
        <ListItem>Forbidden header name of browser</ListItem>
      </List>
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/network-inspect-of-chrome-devtools.md"
      >
        docs/network-inspect-of-chrome-devtools.md
      </Link>
      <Notes>Use Electron API.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary" margin="0 0 30px 0">
        Included Redux DevTools Extension and React DevTools
      </Heading>
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md"
      >
        docs/redux-devtools-integration.md
      </Link>
      <br />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/react-devtools-integration.md"
      >
        docs/react-devtools-integration.md
      </Link>
      <Notes>We have splitted section for explain it.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={5} textColor="primary">
        No dependencies on your project
      </Heading>
      <List margin="60px 0 0 0">
        <ListItem>Global API of Redux DevTools Extension</ListItem>
        <ListItem>RN already included React DevTools setup</ListItem>
      </List>
      <Notes>We can start using it without any npm dependencies.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={4} textColor="primary">
        Shortcuts (Context menu)
      </Heading>
      <List>
        <ListItem>Reload JS [iOS only]</ListItem>
        <ListItem>Toogle Elements Inspector [iOS only]</ListItem>
        <ListItem>Show Developer Menu [iOS only]</ListItem>
        <ListItem>Enable / Disable Network Inspect</ListItem>
        <ListItem>Log AsyncStorage content</ListItem>
        <ListItem>Clear AsyncStorage</ListItem>
      </List>
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/shortcut-references.md"
      >
        docs/shortcut-references.md
      </Link>
      <Notes>
        We have useful shortcuts - context menu, keyborad shortcuts and Touch
        Bar.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Android support for iOS only shortcuts
      </Heading>
      <CodePane
        margin="30px 0 0 0"
        textSize={24}
        lang="bash"
        source="$ npm i react-native-devsettings-android"
      />
      <CodePane
        textSize={24}
        lang="bash"
        source="$ react-native link react-native-devsettings-android"
      />
      <Notes>
        Like `reload`, we used `DevSettings` React Native API, but Android
        doesn't support. Use this package we can enable the feature. Note that
        it's bit experiment.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src="https://user-images.githubusercontent.com/3001525/29369913-91f2e584-8269-11e7-8ebb-10d881aa5f0a.png" />
      <Notes>
        In Chrome DevTools click the console.log source link will open file in
        `Sources` tab, We can enable this feature to replace by editor. I'm
        planing split this feature to the npm package for Electron, but it may
        need extra configurations.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src="https://user-images.githubusercontent.com/3001525/29369953-a97d73d6-8269-11e7-9ec9-54c5018349bc.gif" />
      <Link
        target="_blank"
        textColor="tertiary"
        href="https://github.com/jhen0409/react-native-debugger/blob/master/docs/enable-open-in-editor-in-console.md"
      >
        docs/enable-open-in-editor-in-console.md
      </Link>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Open RNDebugger automatically
      </Heading>
      <CodePane
        margin="30px 0 0"
        textSize={20}
        lang="bash"
        source="$ open rndebugger://set-debugger-loc?port=8081"
      />
      <CodePane
        textSize={20}
        lang="bash"
        source={
          '$ REACT_DEBUGGER="open -g \'rndebugger://set-debugger-loc?port=8001\' ||" \n react-native start"'
        }
      />
      <Text margin="30px 0 0" textSize={24} textColor="primary">
        (macOS only)
      </Text>
      <Notes>
        If you use RNDebugger directly, you need close standard remote debugger
        browser tab. You can use `REACT_DEBUGGER` env for launch it by RN
        packager, it already wrote in official docs. Linux / Windows supports
        are help wanted.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          textColor="tertiary"
          href="https://github.com/artsy/emission/blob/master/docs/debugging.md#standalone-debugger-app"
        >
          artsy/emission
        </Link>
      </Heading>
      <Notes>
        It using react-native-debugger and set `REACT_DEBUGGER` env in
        package.json.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <CodePane
        margin="30px 0 0"
        textSize={20}
        lang="bash"
        source="$ npm i --save-dev react-native-debugger-open"
      />
      <Text margin="30px 0 15px" textSize={24} textColor="primary">
        In package.json
      </Text>
      <CodePane
        textSize={20}
        lang="javascript"
        source={
          '{\n  "scripts": {\n    "postinstall": "rndebugger-open"\n  }\n}'
        }
      />
      <Notes>
        You can just use this package, it can detect React Native packager port.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Image src="https://user-images.githubusercontent.com/3001525/31390358-490eb22a-ad99-11e7-9d1a-65b4d185e261.gif" />
      <Notes>Used create-react-native-app.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          textColor="tertiary"
          href="https://github.com/lelandrichardson/react-native-in-depth"
        >
          lelandrichardson/react-native-in-depth
        </Link>
      </Heading>
      <Notes>
        It's using react-native-debugger, and have some great debug utils for
        react-devtools.
      </Notes>
    </Slide>
  </SlideSet>
)
