'use client';

import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const PortfolioCharts: React.FC = () => {
  const assets = useSelector((state: RootState) => state.portfolio.assets);

  const totalPortfolioValue = assets.reduce((total, asset) => total + asset.currentPrice * asset.quantity, 0);

  const pieData = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: 'Доля в портфеле (%)',
        data: assets.map((asset) => ((asset.currentPrice * asset.quantity) / totalPortfolioValue) * 100),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        hoverOffset: 4,
      },
    ],
  };

  const lineData = {
    labels: assets.map((asset) => asset.name),
    datasets: [
      {
        label: 'Изменение цен (%)',
        data: assets.map(() => (Math.random() * 10 - 5)),
        borderColor: '#36A2EB',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="portfolio-charts">
      <div className="portfolio-charts__chart portfolio-charts__chart--pie">
        <h3 className="portfolio-charts__title">Доля в портфеле (%). </h3>
        <Pie data={pieData} />
      </div>
      <div className="portfolio-charts__chart portfolio-charts__chart--line">
        <h3 className="portfolio-charts__title">Изменение цен (%). </h3>
        <Line data={lineData} />
      </div>
    </div>
  );

};

export default PortfolioCharts;