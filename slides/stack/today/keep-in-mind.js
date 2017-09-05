import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

const notes = `
  But keep in mind - don't build universal applications.
  Each platform has differences -
  sometimes instead of forcing universal approach we should handle stuff differently on each platform.
`;

export default (
  <Slide
    notes={notes}
    key="stacktoday3"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Keep in mind...
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        <span style={boldedTertiary}>Don&apos;t</span> build
        universal applications
      </Text>
    </Appear>
  </Slide>
);
