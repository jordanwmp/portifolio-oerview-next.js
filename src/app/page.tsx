'use client'

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import React, { useEffect, useState } from 'react';

import Header from '@/components/Header';
import Modal from '@/components/Modal';

import PriceDisplayModal from '@/components/PriceDisplayModal';
import Portfolio from '@/components/Portfolio';

import { initializeWebSocket } from '@/services/socketService';
import PortfolioCharts from '@/components/PortfolioCharts';

export default function Home() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const socket = initializeWebSocket();

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Provider store={store}>
       <Header onAddClick={() => setModalOpen(true)} />
      <main>
        <Portfolio />
        <PortfolioCharts/>
        <Modal isOpen={isModalOpen}>
          <PriceDisplayModal onClose={() => setModalOpen(false)} />
        </Modal>
      </main>
    </Provider>
  );
}

