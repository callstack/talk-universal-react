import React from 'react';
import { Appear, List, ListItem, Heading, Slide } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="bolierplate4" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps textColor="secondary">
      What we did here?
    </Heading>
    <List>
      <Appear fid="1">
        <ListItem>
          Moved <span style={boldedTertiary}>react-native</span> files to root
          folder
        </ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>
          Ejected <span style={boldedTertiary}>react</span> app
        </ListItem>
      </Appear>
      <Appear fid="3">
        <ListItem>
          Combined <span style={boldedTertiary}>package.json</span> files
        </ListItem>
      </Appear>
      <Appear fid="4">
        <ListItem>
          Moved src files to <span style={boldedTertiary}>web/src</span>&nbsp;
          directory
        </ListItem>
      </Appear>
      <Appear fid="5">
        <ListItem>
          Updated package.json <span style={boldedTertiary}>scripts</span>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
