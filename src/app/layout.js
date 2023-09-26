"use client";
import StyledComponentsRegistry from "./registry";
import { GlobalStyle } from "../styles/global";
import { Theme } from "../styles/Theme";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Space from "@/components/Space";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <StyledComponentsRegistry>
        <Theme>
          <GlobalStyle />
          <body>
            <Header />
            {children}
            <Footer/>
            <Space/>
            <NavBar/>
          </body>
        </Theme>
      </StyledComponentsRegistry>
    </html>
  );
}
