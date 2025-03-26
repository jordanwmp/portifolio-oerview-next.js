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

const loadFromLocalStorage = (): Asset[] => {
  const savedAssets = localStorage.getItem('portfolioAssets');
  return savedAssets ? JSON.parse(savedAssets) : [];
};

const saveToLocalStorage = (assets: Asset[]) => {
  localStorage.setItem('portfolioAssets', JSON.stringify(assets));
};

const initialState: PortfolioState = {
  assets: loadFromLocalStorage(), 
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    addAsset: (state, action: PayloadAction<Asset>) => {
      state.assets.push(action.payload);
      saveToLocalStorage(state.assets); 
    },
    removeAsset: (state, action: PayloadAction<string>) => {
      state.assets = state.assets.filter(asset => asset.id !== action.payload);
      saveToLocalStorage(state.assets); 
    },
  },
});

export const { addAsset, removeAsset } = portfolioSlice.actions;
export default portfolioSlice.reducer;