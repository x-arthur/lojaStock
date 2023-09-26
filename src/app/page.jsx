import React from "react";
import { Main } from "./styles";
import Card from "@/components/Card";

const Home = () => {
  return (
    <Main>
      <section id="bemVindo">
        <h1>
          Bem - vindo a Iphone <span>Stock_</span>
        </h1>
        <p>
          Aqui você encontra os melhores preços do mercado, visite nosso
          catálogo abaixo e veja quais aparelhos estão disponíveis, aproveite e
          faça uma simulação.
        </p>
      </section>
      <section id="oferta">
        <h2>Ofertas</h2>
        <aside id="container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </aside>
      </section>
    </Main>
  );
};

export default Home;
