import clsx from 'clsx';
import React, { useState } from 'react';

const Accordion = ({
    key = Math.random().toString(),
    title,
    content,
    hideBorderOnOpen = false,
    isOpen,
    setIsOpen,
    ...props
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div key={key} className={clsx("rounded-lg my-4 ",(!hideBorderOnOpen || !isOpen) && '')}>
      <div
        className={clsx("flex items-center justify-between px-[20px] py-2 cursor-pointer",(!hideBorderOnOpen || !isOpen) && 'border border-gray-300 bg-gray-100  dark:bg-transparent dark:border-none')}
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          className={`w-6 h-6 transition-transform duration-300 transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="">{content}</div>
      )}
    </div>
  );
};

export default Accordion;
