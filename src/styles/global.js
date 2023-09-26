import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${(props) => props.theme.colors.preto};
    color: ${(props) => props.theme.colors.branco};
    font-family: ${(props) => props.theme.fontFamily.sans};
    //add para esse projeto:
    height: 100vh;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 96px auto 295px 80px ;

  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-weight: bold;
    color: ${(props) => props.theme.colors.white};
  }
`;
