import React, { useState, useEffect } from 'react';

import { ButtonAction, ButtonSize, Heading3, PText } from 'ui-components';
import * as S from './ProductList.styles';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const productList = await fetch('https://fakestoreapi.com/products').then(res => res.json());

    setProducts(productList);
  }, []);

  const addToCart = (product) => {
    const currentAddedProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...currentAddedProducts, product]));
    const addToCartEvent = new CustomEvent('ADD_TO_CART', { detail: { productId: product.id } });
    window.dispatchEvent(addToCartEvent);
  }

  return (
    <S.ProductList>
      {products.map((product) => (
        <S.Card key={`${product.id}`}>
          <S.Link to={`/products/${product.id}?category=${product.category}`}>
            <S.Image src={product.image} />
          </S.Link>
          <S.Details>
            <S.Title>{product.title}</S.Title>
            <PText>{product.category}</PText>
            <PText>{product.rating.rate} out of 5</PText>
            <S.PriceRow>
              <Heading3>₹ {product.price}</Heading3>
              <S.AddToCart buttonType={ButtonAction.PRIMARY}
                size={ButtonSize.SMALL}
                disabled={false}
                onClick={() => addToCart(product)}>
                Add to Cart
              </S.AddToCart>
            </S.PriceRow>
          </S.Details>
        </S.Card>
      ))}
    </S.ProductList>
  );
}
