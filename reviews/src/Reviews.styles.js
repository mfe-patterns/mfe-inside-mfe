import styled from "styled-components";
import { PText } from 'ui-components';

export const ReviewContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Review = styled.li`
  padding: ${({ theme }) => `${theme.gridSize * 2}px`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[100]};
`;

export const CutomerImage = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-right: ${({ theme }) => `${theme.gridSize}px`};
`

export const CustomerName = styled(PText)`
  color: ${({ theme }) => theme.colors.dark[500]};
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.gridSize / 2}px`};
`;

export const Rating = styled(PText)`
  padding: 0 2px 0 6px;
  margin-left: ${({ theme }) => `${theme.gridSize}px`};
  background-color: ${({ value }) => `${value < 3 ? '#388e3c' : '#ff6161'}`};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
`;