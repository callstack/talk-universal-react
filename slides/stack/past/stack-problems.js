import React from 'react';
import { Appear, List, ListItem, Heading, Slide } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

const notes = `
  This soultion wasn't the perfect one, preety unachievable for one team or one developer.
  It was also really expensive to target a new platform, development process was slow,
  since you had to repeat everything for three times in a different languages.
`;

export default (
  <Slide
    notest={notes}
    key="stackpast3"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps textColor="secondary">
      Potential problems
    </Heading>
    <List>
      <Appear fid="1">
        <ListItem>
          <span style={boldedTertiary}>
            Expensive&nbsp;
          </span>
          to target a new platform
        </ListItem>
      </Appear>
      <Appear fid="2">
        <ListItem>
          <span style={boldedTertiary}>
            Slower&nbsp;
          </span>
          development process
        </ListItem>
      </Appear>
      <Appear fid="3">
        <ListItem>
          <span style={boldedTertiary}>
            &quot;Platform first&quot;&nbsp;
          </span>
          approach
        </ListItem>
      </Appear>
      <Appear fid="4">
        <ListItem>
          Different&nbsp;
          <span style={boldedTertiary}>
            languages
          </span>
        </ListItem>
      </Appear>
    </List>
  </Slide>
);
