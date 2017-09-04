import React from 'react';
import { Slide, Heading } from 'spectacle';

import { backgroundWithImage } from 'styles';

const notes = `
  Goal of our todays approach is to get to know how to create multi platform apps.
  What do I mean for multi-platform apps?
`;

export default (
  <Slide
    notes={notes}
    key="intro3"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={1} fit caps textColor="secondary">
      Multi-platform apps
    </Heading>
  </Slide>
);
