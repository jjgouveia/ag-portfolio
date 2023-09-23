"use client";

import Image from "next/image";
import React from "react";
import ProductCard from "../components/Card/ProductCard";
import ContactComponent from "../components/ContactComponent";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhatsAppComponent from "../components/PopupWhatsapp";
import SectionComponent from "../components/SectionComponent";
import Services from "../components/Services";
import { phoneNumber } from "../utils/variables";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen overflow-x-hidden">
        <SectionComponent id="tab-produtos" title="Equipamentos">
          <ProductCard />
        </SectionComponent>
        <SectionComponent
          id="tab-servicos"
          className="c-section"
          propTitle={false}
        >
          <Services title="Meus Serviços" />
        </SectionComponent>
        <SectionComponent id="tab-sobre" title="Sobre">
          <div className="w-full h-full flex flex-col mt-4 mb-4 items-center gap-4 sm:w-3/4">
            <Image
              src="/assets/images/ag.png"
              alt="Anderson Gouveia"
              width={250}
              height={250}
              quality={100}
              className="rounded-md"
            />
            <div className="border-b-1 border-slate-400">
              <h2 className="text-2xl">Anderson Gouveia</h2>
            </div>
            <h2 className="font-sans">
              • Executivo de vendas na <strong>Dental Padrao</strong>
            </h2>
            <h2 className="font-sans">
              • Especialista em equipamentos odontológicos pela{" "}
              <strong>Gnatus</strong>
            </h2>
          </div>
        </SectionComponent>
        <SectionComponent id="tab-contato" title="Contato">
          <ul className="flex flex-col w-full gap-4">
            <ContactComponent
              icon="/assets/images/icons/whatsapp.svg"
              link={`https://wa.me/${phoneNumber}`}
              text="Entrar em contato pelo WhatsApp"
              altText="WhatsApp de Anderson Gouveia"
            />
            <ContactComponent
              icon="/assets/images/icons/instagram.svg"
              link="https://www.instagram.com/andersondentalpadrao"
              text="Visualizar perfil no Instagram"
              altText="Perfil oficial no Instagram"
            />
            <ContactForm />
          </ul>
        </SectionComponent>
        <WhatsAppComponent />
      </main>
      <Footer />
    </>
  );
};

export default Home;
