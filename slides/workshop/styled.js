import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    key="workshop3"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/styled.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0, 7], title: 'styled-components' },
      { loc: [0, 1], note: 'Start from importing styled.' },
      { loc: [2, 5], note: 'Now you can create your styled component.' },
      { loc: [6, 7], note: "And you're ready to go! 😎" },
    ]}
  />
);
