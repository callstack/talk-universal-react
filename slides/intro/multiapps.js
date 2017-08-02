import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="intro3" transition={['fade']} style={backgroundWithImage}>
    <Heading size={1} fit caps textColor="secondary">
      Multi-platform apps
    </Heading>
  </Slide>
);
