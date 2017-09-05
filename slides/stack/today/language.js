import React from 'react';
import { Slide, Heading, Text } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

const notes = `
  Thanks to the fact taht JS runtime is present on all major platforms,
  we can develop app using only javascript, and that means we can run same code on
  ios, android and the web.
`;

export default (
  <Slide
    notes={notes}
    key="stacktoday1"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Javascript & React
    </Heading>
    <Text textColor="secondary">
      <span style={boldedTertiary}>Universal</span> language and paradigm which
      runs on each
      platform
    </Text>
  </Slide>
);
