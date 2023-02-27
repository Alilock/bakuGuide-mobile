import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './LocationSlice/locationSlice';
import favoriteSlice from './FavoriteSlice/favoriteSlice';
export const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    favorite: favoriteSlice
  },
});
