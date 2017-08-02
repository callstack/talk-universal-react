import React from 'react';
import { Slide, Appear, Heading, Image, Text, Layout, Fill } from 'spectacle';

import images from 'images';
import { backgroundWithImage } from 'styles';

const styles = {
  roundWithBorder: {
    borderRadius: '50%',
    border: 'solid 3px white',
  },
};

const PersonTile = ({ name, image, github }) =>
  <Fill>
    <Image
      src={image}
      style={styles.roundWithBorder}
      width="250px"
      height="250px"
    />
    <Text textSize={30} textColor="secondary">{name}</Text>
    <Text textSize={24} textFont="secondary" textColor="tertiary">
      @{github}
    </Text>
  </Fill>;

export default (
  <Slide key="intro2" transition={['fade']} style={backgroundWithImage}>
    <Heading
      size={2}
      style={{ marginBottom: '40px' }}
      caps
      textColor="secondary"
    >
      About us
    </Heading>
    <Appear fid="1">
      <div>
        <Layout>
          <PersonTile
            image={images.mike}
            name="Michał Chudziak"
            github="mike866"
          />
          <PersonTile
            image={images.mike}
            name="Michał Chudziak"
            github="mike866"
          />
        </Layout>
      </div>
    </Appear>
  </Slide>
);