import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  Now we will tell a few words about the setup we are going to use today.
`;

export default (
  <Slide
    notes={notes}
    key="setup1"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={1} fit caps textColor="secondary">
      Setup
    </Heading>
  </Slide>
);
