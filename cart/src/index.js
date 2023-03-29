import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/core/styles';

import ProductList from './ProductList';

window.mountCartMfe = (el) => {
  ReactDOM.render(
    <StylesProvider>
      <ProductList />
    </StylesProvider>,
    el
  )
}