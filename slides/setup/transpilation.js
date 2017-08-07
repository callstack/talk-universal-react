import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="setup4" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Transpilation
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        Babel - transpile code for{' '}
        <span style={boldedTertiary}>any platform</span> that we target
      </Text>
    </Appear>
  </Slide>
);
