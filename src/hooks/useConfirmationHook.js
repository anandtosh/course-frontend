import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const useConfirmationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [resolveFn, setResolveFn] = useState(null);
  const [rejectFn, setRejectFn] = useState(null);

  const confirm = () => {
    setIsOpen(true);
    return new Promise((resolve, reject) => {
      setResolveFn(() => resolve);
      setRejectFn(() => reject);
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const ConfirmationModal = () => {
    return isOpen
      ? ReactDOM.createPortal(
          <div>
            <h2>Confirmation Modal</h2>
            <p>Are you sure you want to proceed?</p>
            <button onClick={resolveFn}>Yes</button>
            <button onClick={rejectFn}>No</button>
          </div>,
          document.body
        )
      : null;
  };

  useEffect(() => {
    const modalRoot = document.createElement('div');
    document.body.appendChild(modalRoot);
    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  return { confirm, closeModal };
};
