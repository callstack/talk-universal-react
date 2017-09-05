import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  Today, thanks to react, and react-native most of these problems were solved.
`;

export default (
  <Slide
    notes={notes}
    key="stacktoday1"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={1} fit caps textColor="secondary">
      Stack of today
    </Heading>
  </Slide>
);
