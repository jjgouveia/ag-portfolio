"use client";

import React from "react";
import Hero from "./components/Hero";
import SectionComponent from "./components/SectionComponent";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="et-main">
        <SectionComponent id="tab-produtos" title="Produtos">
          <h3>something about es6</h3>
        </SectionComponent>
        <SectionComponent id="tab-servicos" title="Serviços">
          <h3>something about react</h3>
        </SectionComponent>
        <SectionComponent id="tab-sobre" title="Sobre">
          <h3>something about angular</h3>
        </SectionComponent>
        <SectionComponent id="tab-contato" title="Contato">
          <h3>something about vue</h3>
        </SectionComponent>
        <section className="et-slide" id="tab-footer">
          <h1>Other</h1>
          <h3>something about other</h3>
        </section>
      </main>
    </>
  );
};

export default Home;
