import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PriceState {
  [key: string]: number; // example: { BTC: 50000, ETH: 1500 }
}

const initialState: PriceState = {};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updatePrice: (state, action: PayloadAction<{ symbol: string; price: number }>) => {
      const { symbol, price } = action.payload;
      state[symbol] = price;
    },
  },
});

export const { updatePrice } = priceSlice.actions;
export default priceSlice.reducer;