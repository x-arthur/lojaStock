import Card from "@/components/Card";
import React from "react";
import { Container, ContainerCard } from "./styles";

const Novo = () => {
  return (
    <Container>
      <h2>Novos</h2>
      <ContainerCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerCard>
    </Container>
  );
};

export default Novo;
