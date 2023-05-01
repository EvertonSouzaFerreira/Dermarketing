import React from "react";

//Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { createGlobalStyle } from "styled-components";
import Cards from "./components/cards/Cards";
import Grafico from "./components/grafico/Grafico";
import Trabalhos from "./components/trabalhos/Trabalhos";
import Vantagens from "./components/vantagens/Vantagens";
import Destaque from "./components/destaques/Destaque";
import Identidade from "./components/identidade/Identidade";
import Anuncio from "./components/anuncio/Anuncio";
import DermarVantagens from "./components/DermarVantagens/DermarVantagens";
import VamosComecar from "./components/vamosComecar/VamosComecar";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", "sans-serif";
    text-decoration: none;
  }
  body{
    background: linear-gradient(180deg, #0E0E0E 0%, #060606 100%);
    width: 100vw;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Cards />
      <Grafico />
      {/* <Trabalhos />
      <Vantagens />
      <Destaque />
      <Identidade />
      <Anuncio />
      <DermarVantagens />
      <VamosComecar /> */}
    </>
  );
}

export default App;
