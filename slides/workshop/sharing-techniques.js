import React from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { backgroundWithImage, boldedTertiary } from 'styles';

export default (
  <Slide key="workshop2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Sharing techniques
    </Heading>
    <Appear fid="1">
      <div>
        <Text textColor="secondary">Primitives: </Text>
        <Text textColor="secondary" fit>
          <code>
            import <span style={boldedTertiary}>styled</span> from&nbsp;
            <span style={boldedTertiary}>styled-components/primitives</span>;
          </code>
        </Text>
      </div>
    </Appear>
    <Appear fid="2">
      <div style={{ marginTop: '20px' }}>
        <Text textColor="secondary">File extentions: </Text>
        <Text textColor="secondary">
          <span style={boldedTertiary}>.js</span>,&nbsp;
          <span style={boldedTertiary}>.native.js</span>,&nbsp;
          <span style={boldedTertiary}>.ios.js</span>,&nbsp;
          <span style={boldedTertiary}>.android.js</span>
        </Text>
      </div>
    </Appear>
  </Slide>
);
