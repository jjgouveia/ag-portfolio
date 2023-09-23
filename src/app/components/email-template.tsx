import * as React from "react";

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  message,
  name,
}) => (
  <div>
    <h1>Mensagem de: {name}!</h1>
    <p>{message}</p>
  </div>
);

export default EmailTemplate;
