import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  Let's take look on how it was done in the past.
`;

export default (
  <Slide
    notes={notes}
    key="stackpast1"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={1} fit caps textColor="secondary">
      Stack of the past
    </Heading>
  </Slide>
);
