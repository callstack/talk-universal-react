import React from 'react';
import { Slide, Heading, Appear } from 'spectacle';

import { backgroundWithImage, theme } from 'styles';

const styles = {
  area: {
    padding: '10px',
    borderRadius: '5px',
    width: '80%',
    margin: '0 10%',
    backgroundColor: `${theme.screen.colors.quartenary}`,
  },
};

const getIndent = (multiplier = 1) => ({
  marginLeft: `${multiplier * 30}px`,
});

const StructureArea = ({ children }) =>
  <div style={styles.area}>
    <code style={{ textAlign: 'left' }}>{children}</code>
  </div>;

export default (
  <Slide key="setup2" transition={['fade']} style={backgroundWithImage}>
    <Heading size={2} caps lineHeight={1} textColor="secondary">
      Code structure
    </Heading>
    <Appear fid="1">
      <div>
        <StructureArea>
          <div>
            <span>package.json</span><br />
            <strong>src</strong><br />
            <strong style={getIndent()}>mobile</strong><br />
            <span style={getIndent(2)}>index.js</span><br />
            <strong style={getIndent()}>web</strong><br />
            <span style={getIndent(2)}>index.js</span><br />
            <strong style={getIndent()}>shared</strong><br />
          </div>
        </StructureArea>
      </div>
    </Appear>
  </Slide>
);
