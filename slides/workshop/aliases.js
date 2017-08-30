import React from 'react';
import CodeSlide from 'spectacle-code-slide';

export default (
  <CodeSlide
    key="workshop1"
    transition={['fade']}
    lang="js"
    code={require('raw-loader!assets/code/alias.example')}
    showLineNumbers={false}
    ranges={[
      { loc: [0, 6], title: 'Alias' },
      { loc: [0, 2], note: 'This is how it looks in web webpack config.' },
      { loc: [3, 5], note: 'And here is the Haul config version.' },
    ]}
  />
);
