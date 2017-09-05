import React from 'react';
import { Appear, List, ListItem, Heading, Slide } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

const notes = `
  What should we build then? Rather than focusing on building universal
  codebase we should try to build:
  - libraries, ui components, actions and reducers, etc.
`;

export default (
  <Slide
    notes={notes}
    key="stacktoday4"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps textColor="secondary">
      What to build
    </Heading>
    <List>
      <Appear fid="1">
        <ListItem>
          Universal <span style={boldedTertiary}>libraries</span>
        </ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>
          Universal <span style={boldedTertiary}>UI components</span>
        </ListItem>
      </Appear>
      <Appear fid="3">
        <ListItem>
          Universal <span style={boldedTertiary}>actions and reducers</span>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
