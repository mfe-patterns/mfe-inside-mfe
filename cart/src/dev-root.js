export * from './ProductList';

import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './ProductList';

ReactDOM.render(
  <StylesProvider>
    <ProductList />
  </StylesProvider>,
  document.querySelector('#cart-dev-root')
);
