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
  reduxExtHowItWorks: require('./redux-devtools-ext-how-it-works.png'),
  v3: require('./v3.png'),
  v3SliderDispatcher: require('./v3-slider-dispatcher.png'),
  v3ThemeSupport: require('./v3-theme-support.png')
}

preloader(images)

export default (
  <SlideSet key="redux_devtools">
    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        How RDE works in RNDebugger?
      </Heading>
      <Image src={images.reduxExtHowItWorks} />
      <Notes>
        It different from browser extension and remote version. it just included
        in Electron renderer, and included the API enhancer in WebWorker, send
        message between Electron renderer and WebWorker.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Usage
      </Heading>
      <CodePane
        margin="30px 0 30px 0"
        textSize={18}
        lang="javascript"
        source={require('raw-loader!./usage')}
      />
      <Text textSize={24} textColor="primary">
        With `compose`
      </Text>
      <CodePane
        margin="10px 0 30px 0"
        textSize={18}
        lang="javascript"
        source={require('raw-loader!./usage2')}
      />
      <Notes>
        We just included the API in WebWorker, so you can use by enabled `Debug
        Remotely`.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Built with
      </Heading>
      <Heading margin="30px" size={6} textColor="primary">
        <Link
          target="_blank"
          textColor="tertiary"
          href="https://github.com/zalmoxisus/remotedev-app"
        >
          remotedev-app
        </Link>
      </Heading>
      <Heading size={6} textColor="primary">
        <Link
          target="_blank"
          textColor="tertiary"
          href="https://github.com/zalmoxisus/remotedev-utils"
        >
          remotedev-utils
        </Link>
      </Heading>
      <Notes>The splitted packages we can use.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        The useful Redux DevTools monitors
      </Heading>
      <List>
        {[
          'gaearon/redux-devtools-log-monitor',
          'alexkuz/redux-devtools-inspector',
          'romseguy/redux-devtools-chart-monitor',
          'calesce/redux-slider-monitor',
          'YoruNoHikage/redux-devtools-dispatch'
        ].map((item) => (
          <ListItem key={item}>
            <Link
              target="_blank"
              href={`https://github.com/${item}`}
              textColor="tertiary"
            >
              {item.replace(/[A-Za-z]*\//g, '')}
            </Link>
          </ListItem>
        ))}
      </List>
      <Notes>
        It included useful monitors. Also, some packages no longer maintained,
        we may fork it in the future.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Features
      </Heading>
      <List>
        <ListItem>Lock state changes</ListItem>
        <ListItem>Start / Stop recording</ListItem>
        <ListItem>Import / Export state</ListItem>
        <ListItem>Multiple store support</ListItem>
      </List>
      <Notes>Import / Export</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Redux DevTools Extension without Redux
      </Heading>
      <CodePane
        margin="30px 0 30px 0"
        textSize={18}
        lang="javascript"
        source={
          'const remotedev = window.__REDUX_DEVTOOLS_EXTENSION__.connect(options)\n\nremotedev.init(initialState)\nconst unsubscribe = remotedev.subscribe(eventHandler)'
        }
      />
      <Text textSize={24} textColor="primary">
        <Link
          target="_blank"
          href="https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Methods.md"
          textColor="tertiary"
        >
          `connect` API
        </Link>
      </Text>
      <Notes>
        The core API for extension we can use. You need handle monitor actions.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Related libraries
      </Heading>
      <List>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/zalmoxisus/mobx-remotedev"
            textColor="tertiary"
          >
            mobx-remotedev
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/mobxjs/mobx-state-tree/tree/master/packages/mst-middlewares#connectreduxdevtools"
            textColor="tertiary"
          >
            mst-middlewares
          </Link>
          {' (mobx-state-tree)'}
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            href="https://github.com/jhen0409/remotedev-react-state"
            textColor="tertiary"
          >
            remotedev-react-state
          </Link>
        </ListItem>
      </List>
      <Notes>
        MobX support in Redux DevTools. remotedev-react-state is my experiment
        for inject state changes in Redux DevTools Extension.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        RemoteDev reports
      </Heading>
      <List>
        <ListItem textSize={32}>
          <Link
            target="_blank"
            href="https://github.com/zalmoxisus/redux-remotedev"
            textColor="tertiary"
          >
            redux-remotedev
          </Link>
        </ListItem>
        <ListItem textSize={32}>
          <Link
            target="_blank"
            href="https://github.com/zalmoxisus/remotedev-server"
            textColor="tertiary"
          >
            remotedev-server
          </Link>
        </ListItem>
        <ListItem textSize={32}>
          {'In Web: `<url>?remotedev_report=<report_id>`'}
        </ListItem>
        <ListItem textSize={32}>Not yet support for RNDebugger</ListItem>
      </List>
      <Notes>
        redux-remotedev is useful for bug report with redux store state, you can
        deploy the server with remotedev-server.
      </Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Redux DevTools Extension v3
      </Heading>
      <Image src={images.v3} />
      <Notes>V3 is coming, but not positive enough.</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Redux DevTools Extension v3
      </Heading>
      <Image src={images.v3SliderDispatcher} />
      <Text margin="-34px 0 10px" textSize={24} textColor="primary">
        {'Opened '}
        <Link
          target="_blank"
          href="https://github.com/calesce/redux-slider-monitor"
          textColor="tertiary"
        >
          Slider
        </Link>
        {' and '}
        <Link
          target="_blank"
          href="https://github.com/YoruNoHikage/redux-devtools-dispatch"
          textColor="tertiary"
        >
          Dispatcher
        </Link>
      </Text>
      <Notes>The changes of Slider and Dispatcher</Notes>
    </Slide>

    <Slide bgColor="secondary" textColor="primary">
      <Heading size={6} textColor="primary">
        Redux DevTools Extension v3
      </Heading>
      <Image src={images.v3ThemeSupport} />
      <Text margin="-34px 0 10px" textSize={24} textColor="primary">
        {'Theme support '}
        <Link
          target="_blank"
          href="https://github.com/zalmoxisus/devui"
          textColor="tertiary"
        >
          (devui)
        </Link>
      </Text>
      <Notes>We have based UI kit.</Notes>
    </Slide>
  </SlideSet>
)
