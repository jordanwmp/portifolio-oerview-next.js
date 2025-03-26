'use client';

import React from 'react';

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        {/* <button className="modal__close" onClick={onClose}>X</button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;