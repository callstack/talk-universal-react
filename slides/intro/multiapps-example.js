import React from 'react';
import { Slide, Heading, Image, Layout, Fill } from 'spectacle';

import images from 'images';
import { backgroundWithImage, theme } from 'styles';

const styles = {
  border: {
    border: `solid 3px ${theme.screen.colors.tertiary}`,
  },
  rotateLeft: {
    margin: '-40px 0px 0px -30px',
    transform: 'rotate(-15deg)',
  },
  rotateRight: {
    margin: '-40px 0px 0px 30px',
    transform: 'rotate(15deg)',
  },
};

export default (
  <Slide key="intro4" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps textColor="secondary">
      Target whole market
    </Heading>
    <Image
      src={images.facebookWeb}
      style={styles.border}
      width="383px"
      height="216px"
    />
    <Layout>
      <Fill>
        <Image
          src={images.facebookIos}
          style={[styles.border, styles.rotateLeft]}
          width="120px"
          height="212px"
        />
      </Fill>
      <Fill>
        <Image
          src={images.facebookAndroid}
          style={[styles.border, styles.rotateRight]}
          width="143px"
          height="255px"
        />
      </Fill>
    </Layout>
  </Slide>
);
