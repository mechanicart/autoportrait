import { createGlobalStyle } from 'styled-components/macro';

export const AppStyle = createGlobalStyle`
  *, 
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
