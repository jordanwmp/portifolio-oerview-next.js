// eslint-disable-next-line @typescript-eslint/no-unused-vars

'use client';

import React from 'react';

const Modal: React.FC<{ isOpen: boolean; children: React.ReactNode }> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        {children}
      </div>
    </div>
  );
};

export default Modal;