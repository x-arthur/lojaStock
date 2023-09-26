"use client";
import styled from "styled-components";

export const Main = styled.main`
  /* height: 70vh; */
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  #bemVindo {
    margin: 1rem 0;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
      text-indent: 16px;
      margin: 8px 0;

      text-align: center;
      span {
        color: ${(props) => props.theme.colors.azul};
      }
    }

    p {
      line-height: calc(1rem + 8px);
      max-width: 768px;
      text-indent: 16px;
    }
  }
  #oferta {
    margin: 1.5rem 0 1rem;

    h2 {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 24px;
    }
    #container {
      display: grid;
      grid-template-columns: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      margin: 0 auto;
      @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto auto;
        gap: 16px;
      }
      @media only screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
        gap: 16px;
      }
      @media only screen and (min-width: 1440px) {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-template-rows: auto auto auto;
        gap: 16px;
      }
    }
  }
`;
