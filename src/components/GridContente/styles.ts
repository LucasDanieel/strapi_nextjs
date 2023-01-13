import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 58rem;
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xhuge} 0;
  `};
`;
