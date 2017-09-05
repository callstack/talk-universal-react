import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  There are various ways to achieve it and we are going to go quickly though them now.
`;

export default (
  <Slide
    notes={notes}
    key="intro5"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={1} fit caps textColor="secondary">
      How to achieve it?
    </Heading>
  </Slide>
);
