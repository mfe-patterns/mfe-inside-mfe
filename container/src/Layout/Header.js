import React from 'react';
import { Link } from 'react-router-dom';

import { Heading4 } from 'ui-components';
import * as S from './Header.styles';

export default () => {
  return (
    <S.Header>
      <div className='container'>
        <S.Content>
          <Link to="/products">
            <Heading4>CBP Marketplace</Heading4>
          </Link>
          <S.CartLink to="/cart">
            Cart            
          </S.CartLink>
        </S.Content>
      </div>
    </S.Header>
  )
}