import React from 'react';
import { Slide, Heading } from 'spectacle';
import Terminal from 'spectacle-terminal';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="boilerplate3" transition={['zoom']} style={backgroundWithImage}>
    <Heading size={2} caps textColor="secondary">
      What we did here?
    </Heading>
    <Terminal
      title="mike866@callstackio"
      output={[
        <strong style={{ color: 'magenta' }}>
          react-native init UniversalReactApp
        </strong>,
        <div style={{ color: 'yellow' }}>Installing...</div>,
        <div>
          <div style={{ color: 'orange' }}>To run your app on iOS:</div>
          <div>
            <div>cd /Users/michalchudziak/Documents/node_projects/TestApp</div>
            <div style={{ color: 'green' }}>react-native run-ios</div>
            <div>- or -</div>
            <div>Open ios/TestApp.xcodeproj in Xcode</div>
            <div>Hit the Run button</div>
          </div>
          <div style={{ color: 'orange' }}>To run your app on Android:</div>
          <div>
            <div>
              <div>
                cd /Users/michalchudziak/Documents/node_projects/TestApp
              </div>
              <div>
                Have an Android emulator running (quickest way to get started),
              </div>
              <div>
                or a device connected
              </div>
              <div style={{ color: 'green' }}>react-native run-android</div>
            </div>
          </div>
        </div>,
        <strong style={{ color: 'magenta' }}>
          create-react-app universal-react-app
        </strong>,
        <div style={{ color: 'yellow' }}>
          Creating a new React app in /MyDir/universal-react-app
        </div>,
        <div>
          <div>Installing packages. This might take a couple of minutes.</div>
          <div>Installing react, react-dom, and react-scripts...</div>
        </div>,
        <div>
          <div style={{ color: 'orange' }}>
            Success! Created universal-react-app at /MyDir/universal-react-app
          </div>
          <div>Inside that directory, you can run several commands:</div>

          <div style={{ color: 'green' }}>yarn start</div>
          <div>Starts the development server.</div>

          <div style={{ color: 'green' }}>yarn build</div>
          <div>Bundles the app into static files for production.</div>

          <div style={{ color: 'green' }}>yarn test</div>
          <div>Starts the test runner.</div>

          <div style={{ color: 'green' }}>yarn eject</div>
          <div>
            Removes this tool and copies build dependencies, configuration files
            and scripts into the app directory. If you do this, you can’t go
            back!
          </div>
        </div>,
      ]}
    />
  </Slide>
);
