"use client";
import styled from "styled-components";

export const C_Simulador = styled.section`
  max-width: 568px;
  margin: 0 auto;
  padding: 0 16px;
  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 24px auto 40px;
  }
  .grupo {
      margin: 18px auto;

      label {
        display: block;
        width: 100%;
        font-size: 18px;
        margin: 4px auto;
      }

      input[type="number"] {
        min-height: 32px;
        width: calc(100% - 32px);
        border-radius: 4px;
        border: 1px solid transparent;
        margin: 0 auto;
        display: block;
      }
    }
    .grupo {
      button {
        display: block;
        min-height: 40px;
        width: 164px;
        margin: 40px auto 0;
        border-radius: 4px;
        border: 1px solid transparent;
        color: cor.$roxo-01;

      }
    }
    #valores {
      margin: 24px auto 144px;

      #container {
        // background-color: aquamarine;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        div {
          h2 {}

          ul {
            list-style: none;

            li:first-child {
              display: none;
            }
          }
        }
      }
    }
`;
