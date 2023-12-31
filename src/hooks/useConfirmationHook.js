import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import ConfirmationModal from '../components/modals/ConfirmationModal';

const useConfirm = () => {
  const confirmStateRef = useRef({
    resolve: () => { },
    reject: () => { },
  });

  // Create a portal to render the modal outside the main component tree
  const modalRoot = document.getElementsByTagName('body')[0];
  const modalContainer = document.createElement('div');

  const confirm = async (title, content) => {
    // Correct way to use ReactDOM.createPortal to render the ConfirmDialog
    modalRoot.appendChild(modalContainer);
    (createRoot(modalContainer)).render(<ConfirmDialog title={title} content={content} />)

    return new Promise((resolve, reject) => {
      confirmStateRef.current = {
        resolve: () => {
          resolve(true); // Resolving the promise with 'true' when user confirms
          cleanup();
        },
        reject: () => {
          reject(new Error('User rejected')); // Rejecting the promise with an error when user rejects
          cleanup();
        },
      };
    });
  };

  const cleanup = () => {
    confirmStateRef.current = {
      resolve: () => { },
      reject: () => { },
    };
    modalRoot.removeChild(modalContainer);
  };

  const handleConfirm = (confirmed) => {
    if (confirmed) {
      confirmStateRef.current.resolve();
    } else {
      confirmStateRef.current.reject();
    }
  };

  const ConfirmDialog = ({title, content,...props}) => {
    return (
      <>
        <ConfirmationModal
          title={title}
          content={content}
          onConfirm={() => handleConfirm(true)}
          onReject={() => handleConfirm(false)}
        >
        </ConfirmationModal>
      </>
    );
  };

  return { confirm };
};

export default useConfirm;
