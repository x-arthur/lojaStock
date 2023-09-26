import React from "react";
import { C_Footer } from "./styles";
import Image from "next/image";

const Footer = () => {
  return (
    <C_Footer>
      <aside id="footerLogo">
        <Image src="/logo-stock.png" alt="logo" width={168} height={88} />
        <div id="contato">
          <a href="#">@stock_</a>
          <a href="tel:+">(xx) xxxxx-xxxx</a>
        </div>
      </aside>
      <aside id="horario">
        <p>Horário de funcionamento:</p>
        <p>Seg a Sex: 08:00 às 18:00</p>
        <p>Sab: 08:00 às 12:00</p>
      </aside>
      <aside id="localizacao"><p>Localização:</p></aside>
      <aside id="direito">
        <p>Todos os direitos são reservados</p>
      </aside>
      <aside id="desenvolvido">
        <p>Desenvolvido por Arthur Ximenes</p>
      </aside>
    </C_Footer>
  );
};

export default Footer;
