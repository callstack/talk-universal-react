import React from 'react';
import { Slide, Heading, Image } from 'spectacle';

import { backgroundWithImage, theme } from 'styles';
import images from 'images';

const styles = {
  border: {
    border: `solid 3px ${theme.screen.colors.tertiary}`,
  },
};

export default (
  <Slide key="workshop4" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Flux
    </Heading>
    <Image
      src={images.flux}
      style={styles.border}
      width="660px"
      height="210px"
    />
  </Slide>
);
