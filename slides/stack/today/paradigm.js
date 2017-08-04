import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="stacktoday2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      React
    </Heading>
    <Text textColor="secondary">
      The ability to apply the paradigm&nbsp;
      <span style={boldedTertiary}>regardless of the environment</span> opens up
      a lot of exciting possibilities
    </Text>
  </Slide>
);
