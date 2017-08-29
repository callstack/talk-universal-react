import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

export default (
  <Slide key="boilerplate1" transition={['fade']} style={backgroundWithImage}>
    <Heading size={1} fit caps textColor="secondary">
      Let&apos;s start
    </Heading>
  </Slide>
);
