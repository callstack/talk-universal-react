import React from 'react';
import { render } from 'react-dom';

import Presentation from 'presentation';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

render(<Presentation />, document.getElementById('root'));
