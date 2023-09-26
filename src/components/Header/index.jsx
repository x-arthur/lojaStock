import React from "react";
import { C_Header } from "./styles";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <C_Header>
      <Link href="/">
        <Image src="/logo-stock.png" alt="logo" width={168} height={88} />
      </Link>
    </C_Header>
  );
};

export default Header;
