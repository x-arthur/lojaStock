"use client";
import styled from "styled-components";

export const Container = styled.section`
  h2 {
    margin: 2.5rem auto 1.5rem;
    font-size: 2rem;
    font-weight: 500;
    padding-left: 2rem;
    max-width: 1024px;
  }
`;
export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 2rem auto;
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
`;
