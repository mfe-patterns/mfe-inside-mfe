import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  padding: ${({ theme }) => `${theme.gridSize * 2}px`};
  display: flex;
  align-items: center;
  justify-content: center;
`
