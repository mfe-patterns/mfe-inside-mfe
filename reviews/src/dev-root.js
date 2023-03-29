import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme, Heading3 } from 'ui-components';

import Reviews from './Reviews';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <section className='container'>
      <Heading3>Ratings and Reviews</Heading3>
      <Reviews />
    </section>
  </ThemeProvider>,
  document.querySelector('#review-root')
);
