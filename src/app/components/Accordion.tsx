import React, { ReactNode, useState } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="w-full p-4 text-left focus:outline-none hover:bg-gray-200 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Accordion: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white shadow-md rounded-lg">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem };
