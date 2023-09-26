import Card from "@/components/Card";
import React from "react";
import { Container, ContainerCard } from "./styles";

const Seminovos = () => {
  return (
    <Container>
      <h2>Seminovos</h2>
      <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerCard>
    </Container>
  );
};

export default Seminovos;
