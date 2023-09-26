import React from "react";
import { C_Card } from "./styles";

const Card = () => {
  return (
    <C_Card>
      <img
        src="https://fakeimg.pl/148x208?text=Produto"
        alt="imagem do produto"
      />
      <div className="info">
        <h3>Iphone 14 PRO MAX</h3>
        <p>
          Memoria: <span>128gb</span>
        </p>
        <p>
          cor: <span>Roxo</span>
        </p>
      </div>
      <p>por</p>
      <h4>R$ 5.999,00</h4>
    </C_Card>
  );
};

export default Card;
