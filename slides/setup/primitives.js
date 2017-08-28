import React from 'react';
import { Slide, Heading, Text, Appear, List, ListItem } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="setup5" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Primitives
    </Heading>
    <Appear fid="1">
      <Text textColor="secondary">
        Avoid platform specific controls - use&nbsp;
        <span style={boldedTertiary}>primitives</span> instead
      </Text>
    </Appear>
    <Appear fid="2">
      <List>
        <ListItem>
          react-native-web
        </ListItem>
        <ListItem>
          react-primitives
        </ListItem>
        <ListItem>
          ReactXP
        </ListItem>
      </List>
    </Appear>
  </Slide>
);
