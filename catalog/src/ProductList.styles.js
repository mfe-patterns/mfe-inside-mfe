import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';
import { Heading4, Button } from 'ui-components';

export const ProductList = styled.ul`
  margin: ${({ theme }) => `${theme.gridSize * 3}px`} 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-gap: ${({ theme }) => `${theme.gridSize * 3}px`};
`;

export const Card = styled.li`
  list-style: none;
  box-shadow: 0 10px 10px ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 8px;
  background: white;
  padding: ${({ theme }) => `${theme.gridSize * 2}px ${theme.gridSize * 3}px`};
`;

export const Details = styled.div`
  padding-top: ${({ theme }) => `${theme.gridSize * 2}px`};
`;


export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  height: 175px;
  max-width: 100%;
`;

export const Title = styled(Heading4)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddToCart = styled(Button)`
  width: auto;
`;