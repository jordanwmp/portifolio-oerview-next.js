import { store } from '@/redux/store';
import { updatePrice } from '@/redux/slices/priceSlice';

const symbols = [
  'btcusdt', 'ethusdt', 'bnbusdt', 'bccusdt', 'neousdt', 'ltcusdt', 'qtumusdt', 'adausdt', 'xrpusdt', 'eosusdt',
  'tusdusdt', 'iotausdt', 'xlmusdt', 'ontusdt', 'trxusdt', 'icxusdt', 'venusdt', 'nullsusdt', 'vetusdt', 'paxusdt',
  'bchabcusdt', 'bchsvusdt', 'usdcusdt', 'linkusdt', 'wavesusdt', 'bttusdt', 'ongusdt', 'hotusdt', 'zilusdt',
  'zrxusdt', 'fetusdt', 'batusdt', 'xmrusdt', 'zecusdt', 'iostusdt', 'celrusdt', 'dashusdt', 'nanousdt', 'omgusdt',
  'thetausdt', 'enjusdt', 'mithusdt', 'maticusdt', 'atomusdt', 'tfuelusdt', 'oneusdt', 'ftmusdt', 'algousdt'
];


const WEBSOCKET_URL = `wss://stream.binance.com:9443/stream?streams=${symbols
  .map(symbol => `${symbol}@ticker`)
  .join('/')}`;

export const initializeWebSocket = () => {
  const socket = new WebSocket(WEBSOCKET_URL);

  socket.onopen = () => {
    console.log('WebSocket init');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // extract the symbol and current price
    const symbol = data.data.s; // 
    const price = parseFloat(data.data.c); // current price
    // update redux with new data
    store.dispatch(updatePrice({ symbol, price }));
  };


  socket.onerror = (error) => {
    console.error('Erro on WebSocket:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket closed');
  };

  return socket;
};