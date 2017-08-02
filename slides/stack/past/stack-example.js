import React from 'react';
import { Slide, Heading, Layout } from 'spectacle';

import { backgroundWithImage, theme } from 'styles';

const styles = {
  bar: {
    height: '50px',
    textAlign: 'center',
    lineHeight: '50px',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    backgroundColor: `${theme.screen.colors.primary}`,
    color: `${theme.screen.colors.secondary}`,
    borderRadius: '25px',
    marginTop: '30px',
  },
};

const ApplicationTextBar = ({ text }) =>
  <div style={styles.bar}><strong>{text}</strong> application</div>;

export default (
  <Slide key="stackpast2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps textColor="secondary">
      Stack of the past
    </Heading>
    <Layout>
      <ApplicationTextBar text="Web" />
    </Layout>
    <Layout>
      <ApplicationTextBar text="iOS" />
    </Layout>
    <Layout>
      <ApplicationTextBar text="Android" />
    </Layout>
  </Slide>
);
