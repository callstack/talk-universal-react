import React from 'react';
import { Deck } from 'spectacle';

import slides from 'slides';
import { theme } from 'styles';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        {slides}
      </Deck>
    );
  }
}
