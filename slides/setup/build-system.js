import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

const notes = `
  When it comes to build system today we'll use most
  common one for the web technologies, which is webpack.

  But as you porbably know it's running rather in browser enviorement, but
  thanks to my collegues from callstack.io, we can use tool called Haul, which
  replaces react-native-packager, or metro-bundler with webpack.
`;

export default (
  <Slide
    notes={notes}
    key="setup3"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Build system
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        Webpack (+ <span style={boldedTertiary}>Haul</span>)
      </Text>
    </Appear>
  </Slide>
);
