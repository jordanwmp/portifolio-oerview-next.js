'use client';

import React from 'react';

const Header: React.FC<{ onAddClick: () => void }> = ({ onAddClick }) => {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Portfolio Overview</h1>
        <button className="header__button" onClick={onAddClick}>
        Добавить актив
        </button>
      </div>
    </header>
  );
};

export default Header;