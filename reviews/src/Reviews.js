import React, { useState, useEffect } from 'react';
import { custReviews } from './customer-reviews.js';
import { PText } from 'ui-components';

import * as S from './Reviews.styles';

function mergeReviewImage(images) {
  const productCategory = new URLSearchParams(window.location.search).get('category');
  const customerReviews = custReviews.find(review => review.category === productCategory);

  console.log(productCategory);

  if (customerReviews) {
    return customerReviews.reviews
      .map((review, index) => (
        {
          id: images[index].id,
          name: images[index].author,
          image: images[index],
          rating: Math.floor(Math.random() * 5),
          review,
        }
      ));
  }
  return [];
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(async () => {
    const data = await fetch('https://picsum.photos/v2/list');
    const jsonData = await data.json();
    setReviews(mergeReviewImage(jsonData));
  }, []);

  if (reviews.length === 0) {
    return <PText>No Customer reviews for the product</PText>;
  }

  return (
    <S.ReviewContainer>
      {
        reviews.map((review) => (
          <S.Review key={review.id}>
            <article>
              <S.UserDetails>
                <S.CutomerImage src={review.image.download_url} alt={review.name} />
                <strong>
                  <S.CustomerName>{review.name}</S.CustomerName>
                </strong>
                <S.Rating value={review.rating}>{review.rating}★</S.Rating>
              </S.UserDetails>
              <PText>{review.review}</PText>
            </article>
          </S.Review>
        ))
      }
    </S.ReviewContainer>
  )
}
