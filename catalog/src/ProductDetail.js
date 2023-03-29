import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Heading1, Heading2, Button, PText, ButtonAction, ButtonSize } from 'ui-components';

import MicroFrontend from "./MicroFrontend";
import * as S from './ProductDetails.styles';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(async () => {
    const product = await fetch(`https://fakestoreapi.com/products/${productId}`).then(res => res.json());
    setProduct(product);
  }, []);

  const addToCart = (e) => {
    const currentAddedProducts = JSON.parse(localStorage.getItem('products')) || [];
    localStorage.setItem('products', JSON.stringify([...currentAddedProducts, product]));
    const event = new CustomEvent('ADD_TO_CART', { detail: { productId: product.id } });
    window.dispatchEvent(event)
  }

  return (
    <>
      <S.ProductDetails>
        <S.ImageContainer>
          <S.ProductImage src={product?.image} alt={product.title} className="product-image" />
        </S.ImageContainer>
        <S.ProductInfo>
          <div>
            <Heading1>{product.title}</Heading1>
            <S.SpaceTop />
            <Heading2>₹ {product.price}</Heading2>
            <S.SpaceTop />
            <PText>
              Ratings: {product?.rating?.rate} out of 5. ({product?.rating?.count} reviews)
            </PText>
            <S.SpaceTop />
            <PText>{product.description}</PText>
          </div>
          <Button buttonType={ButtonAction.PRIMARY}
            size={ButtonSize.DEFAULT}
            onClick={addToCart}>
            Add to Cart
          </Button>
        </S.ProductInfo>
      </S.ProductDetails>

      <MicroFrontend src="http://localhost:8083/main.js" />
    </>
  );
}
