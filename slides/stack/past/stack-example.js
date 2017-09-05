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

const notes = `
  In the past we had to build three different codebases.
  First we had to build web app with javascript, 
  and pararelly ios app using swift or obj-c, and android app using java or kotlin.
`;

const ApplicationTextBar = ({ text }) =>
  <div style={styles.bar}><strong>{text}</strong> application</div>;

export default (
  <Slide
    notes={notes}
    key="stackpast2"
    transition={['fade']}
    style={backgroundWithImage}
  >
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
