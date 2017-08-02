import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="stacktoday1" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Javascript
    </Heading>
    <Text textColor="secondary">
      <span style={boldedTertiary}>Universal</span> language which runs on each
      platform
    </Text>
  </Slide>
);
