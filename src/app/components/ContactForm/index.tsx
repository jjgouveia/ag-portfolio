import React, { useState } from "react";
import "./index.css";

// Check for valid email syntax
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
    notificationText: "Thanks for getting in touch!",
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
              notificationText:
                "<strong>Me deixe saber o que está pensando</strong>",
              isNotificationVisible: true,
            });
          }
        } else {
          setFormState({
            ...formState,
            notificationText: "<strong>Forneça um nome.</strong>",
            isNotificationVisible: true,
          });
        }
      } else {
        setFormState({
          ...formState,
          notificationText:
            "<strong>Por favor, forneça um email válido.</strong>",
          isNotificationVisible: true,
        });
      }
    } else {
      setFormState({
        ...formState,
        notificationText:
          "<h3><strong><em>Ops: confirme que não é um robô.</em></strong></h3>",
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
        <div className="cd-popup-container">
          <a href="" className="cd-popup-close cd-close-button">
            <p className="fa fa-times" style={{ pointerEvents: "none" }}>
              X
            </p>
          </a>

          <h3 id="notification-text">{formState.notificationText}</h3>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
