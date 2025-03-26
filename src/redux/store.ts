import { configureStore } from '@reduxjs/toolkit';
import portfolioReducer from './slices/portfolioSlice';
import priceReducer from './slices/priceSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    price: priceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

