"use client";
import React, { useState } from "react";
import { C_Simulador } from "./styles";

const Simulador = () => {
  const calc = () => {
    v.innerHTML = "";
    p.innerHTML = "";
    t.innerHTML = "";
    if (Number(entrada.value) >= Number(valor.value)) {
      console.log(`Entrada é maior:`);
      alert(`O valor da entrada é maior do que o valor do produto`);
    } else {
      let diferenca = valor.value - entrada.value;
      // console.log(diferenca);
      let mes = diferenca / 18;
      // console.log(mes);

      for (let i = 1; i <= 18; i++) {
        let m = diferenca * Math.pow(0.024697, 1);
        diferenca = m + diferenca;
        let itemv = document.createElement("li");
        itemv.innerHTML = i;
        v.appendChild(itemv);
        let itemp = document.createElement("li");
        itemp.innerHTML = (diferenca / i).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        p.appendChild(itemp);
        let itemt = document.createElement("li");
        itemt.innerHTML = diferenca.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });
        t.appendChild(itemt);
      }
    }
  };

  return (
    <C_Simulador>
      <h1>Faça uma simulação e veja o valor de cada parcela</h1>
      <div className="grupo">
        <label htmlFor="valor">Valor do Produto</label>
        <input type="number" name="valor" id="valor" />
      </div>
      <div className="grupo">
        <label htmlFor="entrada">Entrada</label>
        <input type="number" name="entrada" id="entrada" />
      </div>
      <div className="grupo">
        <button onClick={calc}>Calcular</button>
      </div>
      <div id="valores">
        <div id="container">
          <div>
            <h2>Vezes</h2>
            <ul id="v"></ul>
          </div>
          <div>
            <h2>Parcelas</h2>
            <ul id="p"></ul>
          </div>
          <div>
            <h2>Total</h2>
            <ul id="t"></ul>
          </div>
        </div>
      </div>
    </C_Simulador>
  );
};

export default Simulador;
