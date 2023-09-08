import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";

const AccordionItem: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Usar useEffect para controlar a animação
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div>
      <button
        className="w-full p-1 text-center rounded-md focus:outline-none hover:bg-sky-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content"
            initial={{ opacity: 0, height: 0, overflow: "hidden" }}
            animate={{ opacity: 1, height: "auto", overflow: "visible" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="w-2/3 mx-auto mt-4">
      <div className="bg-sky-900 shadow-md rounded-md">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem };
