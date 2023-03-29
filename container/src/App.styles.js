import styled from "styled-components";

export const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const Main = styled.main`
  flex: 1;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`