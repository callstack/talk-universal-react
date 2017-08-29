import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="boilerplate2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Boilerplate
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        <span style={boldedTertiary}>
          https://github.com/callstack-io/universal-react-app
        </span>
      </Text>
    </Appear>
  </Slide>
);
