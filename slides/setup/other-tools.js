import React from 'react';
import { Slide, Heading, List, Appear, ListItem } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="setup6" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Other tools
    </Heading>
    <List>
      <Appear fid="1">
        <ListItem>
          react-community/<span style={boldedTertiary}>react-navigation</span>
        </ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>
          callstack-io/<span style={boldedTertiary}>async-storage</span>
        </ListItem>
      </Appear>
      <Appear fid="1">
        <ListItem>
          reactjs/<span style={boldedTertiary}>redux</span>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
