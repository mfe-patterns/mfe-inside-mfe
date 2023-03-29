import styled from "styled-components";

export const ProductDetails = styled.article`
  display: flex;
  padding: ${({ theme }) => `${theme.gridSize * 4}px 0`};
`;

export const ImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 80%;
`;

export const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const SpaceTop = styled.div`
  padding-top: ${({ theme }) => `${theme.gridSize * 2}px`};
`;