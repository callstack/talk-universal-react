import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="stacktoday4" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Keep in mind...
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        <span style={boldedTertiary}>Don&apos;t</span> build
        universalapplications
      </Text>
    </Appear>
  </Slide>
);
