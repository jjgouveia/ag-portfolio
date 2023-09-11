import React, { useState } from "react";
import "./index.css";

function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    human: false,
  });

  const [formState, setFormState] = useState({
    isContactVisible: false,
    isNotificationVisible: false,
    notificationText: "Obrigado!",
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLInputElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const openContactForm = () => {
    setFormState({
      ...formState,
      isContactVisible: true,
    });
  };

  const closeContactForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      human: false,
    });

    setFormState({
      isContactVisible: false,
      isNotificationVisible: true,
      notificationText: "Obrigado pelo contato!",
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, message, human } = formData;

    if (human) {
      if (validateEmail(email)) {
        if (name) {
          if (message) {
            // Handle submitting data somewhere
            // For example, you can make an API request here
            closeContactForm();
          } else {
            setFormState({
              ...formState,
              notificationText: "Me deixe saber o que está pensando",
              isNotificationVisible: true,
            });
          }
        } else {
          setFormState({
            ...formState,
            notificationText: "Forneça um nome.",
            isNotificationVisible: true,
          });
        }
      } else {
        setFormState({
          ...formState,
          notificationText: "Por favor, forneça um email válido.",
          isNotificationVisible: true,
        });
      }
    } else {
      setFormState({
        ...formState,
        notificationText: "Ops: confirme que não é um robô.",
        isNotificationVisible: true,
      });
    }
  };

  return (
    <div className="contact-container mt-8">
      <ul className="actions">
        <li>
          <a
            href="#"
            id="contact"
            className="button big"
            onClick={openContactForm}
          >
            Entre em contato por email
          </a>
        </li>
      </ul>

      <div
        className={`cd-popup contact ${
          formState.isContactVisible ? "is-visible" : ""
        }`}
        role="alert"
      >
        <form
          name="contactform"
          id="contactform"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className="cd-popup-container" style={{}}>
            <p>
              <a
                href="/#tab-contato"
                onClick={() =>
                  setFormState({ ...formState, isContactVisible: false })
                }
                className="cd-popup-close cd-close-button"
              >
                <span style={{ pointerEvents: "none" }}>X</span>
              </a>
            </p>

            <div className="name">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="message">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <br />
            <div style={{ textAlign: "left" }}>
              <input
                type="checkbox"
                id="human"
                name="human"
                checked={formData.human}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="human">Eu não sou um robô.</label>
            </div>
            <br />
            <div className="submit">
              <p className="user-message" id="contactblurb">
                Dúvidas, sugestões e comentários em geral.
              </p>
              <input type="submit" name="submit" id="submit" value="Enviar!" />
            </div>
          </div>
        </form>
      </div>

      <div
        className={`cd-popup notification ${
          formState.isNotificationVisible ? "is-visible" : ""
        }`}
        role="alert"
      >
        <div className="cd-popup-container mt-8 flex-col gap-8">
          <div className="flex flex-col-reverse">
            <button
              className="w-full min-h-auto bg-sky-900 text-white text-md font-thin rounded-md font-sans"
              onClick={() =>
                setFormState({
                  ...formState,

                  isNotificationVisible: false,
                })
              }
            >
              Fechar
            </button>

            <p id="notification-text" className="tracking-wider text-black">
              {formState.notificationText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
