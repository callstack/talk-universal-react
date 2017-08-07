import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="setup3" transition={['fade']} style={backgroundWithImage}>
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
