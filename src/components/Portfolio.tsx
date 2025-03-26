'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeAsset } from '../redux/slices/portfolioSlice';

const Portfolio: React.FC = () => {
  const assets = useSelector((state: RootState) => state.portfolio.assets);
  const dispatch = useDispatch();
  const totalPortfolioValue = assets.reduce((total, asset) => total + asset.currentPrice * asset.quantity, 0);

  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Мой портфель</h2>
      {assets.length > 0 ? (
        <table className="portfolio__table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Количество</th>
              <th>Текущая цена</th>
              <th>Общая стоимость</th>
              <th>Изменение (24ч)</th>
              <th>Доля (%)</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => {
              const totalValue = asset.currentPrice * asset.quantity;
              const proportion = ((totalValue / totalPortfolioValue) * 100).toFixed(2);

              return (
                <tr key={asset.id} className="portfolio__row">
                  <td>{asset.name}</td>
                  <td>{asset.quantity}</td>
                  <td>${asset.currentPrice.toFixed(2)}</td>
                  <td>${totalValue.toFixed(2)}</td>
                  <td>{(Math.random() * 10 - 5).toFixed(2)}%</td>
                  <td>{proportion}%</td>
                  <td>
                    <button
                      className="portfolio__remove-button"
                      onClick={() => dispatch(removeAsset(asset.id))}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="portfolio__empty">Нет активов в портфеле.</p>
      )}
    </div>
  );
};

export default Portfolio;