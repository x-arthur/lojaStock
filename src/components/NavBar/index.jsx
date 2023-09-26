import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdCalculate, MdPhoneIphone } from "react-icons/md";
import { C_Nav } from "./styles";
const NavBar = () => {
  return (
    <C_Nav>
      <ul>
        <li>
          <Link href="/Novos">
            <MdPhoneIphone />
            Novos
          </Link>
        </li>
        <li>
          <Link href="/Vitrine">
            <MdPhoneIphone />
            Vitrine
          </Link>
        </li>
        <li>
          <Link href="/">
            <AiFillHome />
            Home
          </Link>
        </li>
        <li>
          <Link href="/Seminovos">
            <MdPhoneIphone />
            S/Novos
          </Link>
        </li>
        <li>
          <Link href="/Simulador">
            <MdCalculate />
            Simul.
          </Link>
        </li>
      </ul>
    </C_Nav>
  );
};

export default NavBar;
