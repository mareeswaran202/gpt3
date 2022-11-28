import React from "react";
import "./App.css";
import {
  Blog,
  Footer,
  Header,
  Possbility,
  WhatGPT3,
  Features,
} from "./Containers";
import { CTA, Brand, Navbar } from "./Components";

const App = () => {
  return (
    <div className="app">
      <div className="gradiant_bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possbility></Possbility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default App;
