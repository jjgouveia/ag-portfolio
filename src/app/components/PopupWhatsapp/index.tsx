import { phoneNumber } from "@/app/utils/variables";
import Image from "next/image";
import React, { useEffect } from "react";
import "./index.css";

const WhatsAppComponent: React.FC = () => {
  useEffect(() => {
    const popupWhatsApp = () => {
      const btnClosePopup = document.querySelector(".closePopup");
      const btnOpenPopup = document.querySelector(".whatsapp-button");
      const popup = document.querySelector(".popup-whatsapp");
      const sendBtn = document.getElementById("send-btn");

      if (btnClosePopup && btnOpenPopup && popup && sendBtn) {
        btnClosePopup.addEventListener("click", () => {
          popup.classList.toggle("is-active-whatsapp-popup");
        });

        btnOpenPopup.addEventListener("click", () => {
          popup.classList.toggle("is-active-whatsapp-popup");
          popup.classList.add("fadeIn"); // Adiciona classe para controlar a animação
        });

        sendBtn.addEventListener("click", () => {
          const msgInput = document.getElementById(
            "whats-in"
          ) as HTMLInputElement;
          const msg = msgInput.value;
          const relmsg = msg.replace(/ /g, "%20");
          window.open(`https://wa.me/${phoneNumber}?text=` + relmsg, "_blank");
        });
      }
    };

    popupWhatsApp();
  }, []);

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />

      <div className="nav-bottom ">
        <div className="popup-whatsapp fadeIn font-sans">
          <div className="content-whatsapp -top">
            <button type="button" className="closePopup">
              <i className="material-icons icon-font-color">close</i>
            </button>
            <h3 className="text-gray-500">Oi! Como posso ajudar? 🙋🏾‍♂️</h3>
          </div>
          <div className="content-whatsapp -bottom">
            <input
              className="whats-input"
              id="whats-in"
              type="text"
              placeholder="Escreva uma mensagem"
            />
            <button className="send-msPopup" id="send-btn" type="button">
              <i className="material-icons icon-font-color--black">send</i>
            </button>
          </div>
        </div>
        <button type="button" id="whats-openPopup" className="whatsapp-button">
          <Image
            className="icon-whatsapp"
            src="https://cdn-icons-png.flaticon.com/512/134/134937.png"
            alt="WhatsApp"
            height={32}
            width={32}
          />
        </button>
        <div className="circle-anime animate-pulse"></div>
      </div>
    </div>
  );
};

export default WhatsAppComponent;
