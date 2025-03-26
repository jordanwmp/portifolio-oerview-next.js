import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Asset {
  id: string;
  name: string;
  quantity: number;
  currentPrice: number;
}

interface PortfolioState {
  assets: Asset[];
}

const initialState: PortfolioState = {
  assets: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<Asset>) => {
      state.assets.push(action.payload);
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.filter(asset => asset.id !== action.payload);
    },
  },
});

export const { addAsset, removeAsset } = portfolioSlice.actions;
export default portfolioSlice.reducer;