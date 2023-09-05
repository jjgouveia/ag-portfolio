"use client";

import Image from "next/image";
import React from "react";
import PostCard from "./components/Card/CardComponent";
import ContactComponent from "./components/ContactComponent";
import Hero from "./components/Hero";
import SectionComponent from "./components/SectionComponent";
import Services from "./components/Services";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <SectionComponent id="tab-produtos" title="Produtos">
          <p>
            Aqui você encontra os melhores produtos para sua clínica
            odontológica.
          </p>
          <PostCard />
          {/* <ProductsComponent /> */}
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
              objectPosition="center"
              quality={100}
              className="rounded-tl-3xl rounded-br-3xl"
            />
            <h2>Anderson Gouveia,</h2>
            <p className="text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              consequuntur illo, saepe ex sequi nisi veniam inventore quo
              voluptate assumenda vitae dicta accusantium debitis excepturi,
              eligendi tenetur? Magnam, recusandae neque? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Voluptas a cupiditate libero
              omnis! At tenetur, fugit cumque, ab rerum ullam harum unde minus
              dolores iure distinctio et cupiditate sapiente quia!
            </p>
          </div>
        </SectionComponent>
        <SectionComponent id="tab-contato" title="Contato">
          <ul className="flex flex-col w-full gap-4">
            <ContactComponent
              icon="/assets/images/icons/whatsapp.svg"
              link="https://wa.me/5581988670414"
              text="Entrar em contato pelo WhatsApp"
              altText="WhatsApp de Anderson Gouveia"
            />
            <ContactComponent
              icon="/assets/images/icons/instagram.svg"
              link="https://wa.me/5581988670414"
              text="Visualizar perfil no Instagram"
              altText="Perfil oficial no Instagram"
            />
          </ul>
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
