import Link from "next/link";
import React from "react";
import "./index.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-100">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://themify.me/wp-content/themes/themify-v32/themify-icons/themify-icons.css"
      />

      <div className="new_footer_top">
        <div className="container mx-auto">
          <div className="space-y-1 space-x-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* <div
                className="company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="font-semibold text-xl text-indigo-700">
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Não perca nenhuma atualização dos nossos novos modelos e
                  extensões!
                </p>
              </div> */}
              <div className="col-span-1">
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-indigo-700">
                    Menu
                  </h3>
                  <ul className="mt-4 text-gray-600">
                    <li>
                      <a href="/#hero-cover">Capa</a>
                    </li>
                    <li>
                      <a href="/#tab-produtos">Equipamentos</a>
                    </li>
                    <li>
                      <a href="/#tab-servicos">Serviços</a>
                    </li>
                    <li>
                      <a href="/#tab-sobre">Sobre</a>
                    </li>
                    <li>
                      <a href="/#tab-contatos">Contato</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-4">
                  <h3 className="font-semibold text-xl text-indigo-700">
                    Ajuda
                  </h3>
                  <ul className="mt-4 text-gray-600">
                    <li>
                      <Link href="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="/terms">Termos &amp; condições</Link>
                    </li>
                    <li>
                      <Link href="/suport">Suporte</Link>
                    </li>
                    <li>
                      <Link href="/privacy">Privacidade</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1">
                <div className="p-4">
                  <h2 className="font-semibold text-xl text-indigo-700 font-sans">
                    Stellaria Soluções Web
                  </h2>
                  <div className="mt-4 text-gray-600">
                    <a
                      href="https://www.linkedin.com/in/jarbasgouveia/"
                      target="_blank"
                      title="LinkedIn do Desenvolvedor"
                      className="mr-2"
                    >
                      <i className="fab fa-linkedin text-xl"></i>
                    </a>
                    <a
                      href="https://github.com/jjgouveia"
                      target="_blank"
                      title="GitHub do Desenvolvedor"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 font-semibold text-center">
                © Jr Gouveia - {new Date().getFullYear()}. Todos os direitos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
