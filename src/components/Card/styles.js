"use client";
import styled from "styled-components";

export const C_Card = styled.div`
  background-color: ${(props) => props.theme.colors.branco};
  width: 232px;
  height: 368px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  img {
    margin: 24px 24px 16px;
    height: 208px;
    width: 184px;
    border-radius: 0.3rem;
  }
  .info {
    margin: 0 auto;

    color: ${(props) => props.theme.colors.preto};

    h3 {
      font-size: 1.125rem;
      color: inherit;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      font-weight: 300;
    }
  }
  p {
    color: ${(props) => props.theme.colors.preto};
    font-size: 14px;
    margin: 3px 0 0 16px;
    font-weight: bold;
  }
  h4 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.azul};
    text-align: center;
  }
`;
