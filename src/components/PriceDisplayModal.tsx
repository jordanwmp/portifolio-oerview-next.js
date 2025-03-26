'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { addAsset } from '@/redux/slices/portfolioSlice';

const PriceDisplayModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const prices = useSelector((state: RootState) => state.price);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);

  const handleAdd = () => {
    if (selectedSymbol && prices[selectedSymbol]) {
      dispatch(
        addAsset({
          id: selectedSymbol,
          name: selectedSymbol.replace('USDT', ''),
          quantity: 1, 
          currentPrice: prices[selectedSymbol],
        })
      );
      setSelectedSymbol(null);
      onClose();
    }
  };

  return (
    <div className="price-display-modal">
      <input
        className="price-display-modal__search-input"
        type="text"
        placeholder="Искать символ (например: BTC)"
        value={search}
        onChange={(e) => setSearch(e.target.value.toUpperCase())}
      />
      <ul className="price-display-modal__list">
        {Object.keys(prices)
          .filter((symbol) => symbol.includes(search))
          .map((symbol) => (
            <li
              key={symbol}
              className="price-display-modal__list__item"
              onClick={() => setSelectedSymbol(symbol)}
            >
              {symbol.replace('USDT', '')}: ${prices[symbol].toFixed(2)}
            </li>
          ))}
      </ul>
      {selectedSymbol && (
        <div className="price-display-modal__buttons">
          <button
            className="price-display-modal__buttons__button price-display-modal__buttons__button--add"
            onClick={handleAdd}
          >
            Добавить
          </button>
          <button
            className="price-display-modal__buttons__button price-display-modal__buttons__button--cancel"
            onClick={onClose}
          >
            Отменить
          </button>
        </div>
      )}
    </div>

  );
};

export default PriceDisplayModal;