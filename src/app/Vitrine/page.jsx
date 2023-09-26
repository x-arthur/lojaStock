import Card from "@/components/Card";
import React from "react";
import { Container, ContainerCard } from "./styles";

const Vitrine = () => {
  return (
    <Container>
      <h2>Vitrine</h2>
      <ContainerCard>
        <Card />
        <Card />
        <Card />
      </ContainerCard>
    </Container>
  );
};

export default Vitrine;
