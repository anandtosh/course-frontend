import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ConfirmationModal from '../components/modals/ConfirmationModal';

const useConfirm = () => {
  const [confirmState, setConfirmState] = useState({
    resolve: () => { },
    reject: () => { },
  });

  const modalRoot = document.getElementsByTagName('body')[0];
  const modalContainer = document.createElement('div');

  const confirm = async () => {
    modalRoot.appendChild(modalContainer);

    return new Promise((resolve, reject) => {
      setConfirmState({
        resolve: () => {
          resolve(true); // Resolving the promise with 'true' when user confirms
          cleanup();
        },
        reject: () => {
          reject(new Error('User rejected')); // Rejecting the promise with an error when user rejects
          cleanup();
        },
      });
    });
  };

  const cleanup = () => {
    setConfirmState({
      resolve: () => { },
      reject: () => { },
    });
    modalRoot.removeChild(modalContainer);
  };

  const ConfirmDialog = () => {
    return ReactDOM.createPortal(
      <ConfirmationModal
        onConfirm={() => handleConfirm(true)}
        onReject={() => handleConfirm(false)}
      />,
      modalContainer
    );
  };

  const handleConfirm = (confirmed) => {
    if (confirmed) {
      confirmState.resolve();
    } else {
      confirmState.reject(new Error('User rejected'));
    }
  };

  return { confirm };
};

export default useConfirm;
