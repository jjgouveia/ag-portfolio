import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useState } from "react";

const AccordionItem: React.FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
        className="w-full p-1 text-center rounded-md focus:outline-none hover:bg-amber-400 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-content px-2"
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
    <div className="w-full mx-auto mt-4">
      <div className="bg-amber-200 text-sky-900 font-semibold shadow-md rounded-md">
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem };
