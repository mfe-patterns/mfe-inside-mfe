import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Header = styled.header`  
  padding: ${({ theme }) => `${theme.gridSize * 2}px`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 5px 5px ${({ theme }) => theme.colors.neutral[200]};
  position: fixed;
  width: 100%;
  box-sizing: border-box;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartLink = styled(Link)`
  position: relative;
  padding-right: ${({ theme }) => `${theme.gridSize * 2}px`};
`

export const CartCount = styled.i`
  position: absolute;
  left: -16px;
  top: -13px;
  background: red;
  padding: 2px 7px;
  border-radius: 50%;
  color: white;
  z-index: 1;
`
