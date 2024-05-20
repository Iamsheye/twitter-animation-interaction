import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    height: 100dvh;
    display: grid;
    place-content: center;
  }
`;

export default GlobalStyles;
