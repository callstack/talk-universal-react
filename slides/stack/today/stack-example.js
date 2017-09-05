import React from 'react';
import { Slide, Heading, Layout, Fill } from 'spectacle';

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

const ApplicationTextBar = ({ text, application = false }) =>
  <div style={styles.bar}>
    <strong>{text}</strong>{application && ' application'}
  </div>;

const notes = `
  So today's stack looks rather like this: we have single application running on web, ios and android
`;

export default (
  <Slide
    notes={notes}
    key="stacktoday2"
    transition={['fade']}
    style={backgroundWithImage}
  >
    <Heading size={2} caps textColor="secondary">
      Stack of today
    </Heading>
    <Layout>
      <ApplicationTextBar text="Single" application />
    </Layout>
    <Layout>
      <Fill>
        <ApplicationTextBar text="iOS" />
      </Fill>
      <Fill>
        <ApplicationTextBar text="Web" />
      </Fill>
      <Fill>
        <ApplicationTextBar text="Android" />
      </Fill>
    </Layout>
  </Slide>
);
