import 'styled-components/macro';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string,
    text: string,
    toggleBorder: string,
    gradient: string,

    // colors: {
    //   main: string;
    //   secondary: string;
    // };
  }
}
