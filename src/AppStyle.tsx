import { createGlobalStyle } from 'styled-components/macro';

export const AppStyle = createGlobalStyle`
  *, 
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 0 20px;
    padding-top: 100px;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
