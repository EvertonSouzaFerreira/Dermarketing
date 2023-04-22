import React from "react";

//Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { createGlobalStyle } from "styled-components";
import Cards from "./components/cards/Cards";

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
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Cards />
    </>
  );
}

export default App;
