import {configureStore} from '@reduxjs/toolkit';
import {favoriteSlice} from './FavoriteSlice/favoriteSlice';
import {locationSlice} from './LocationSlice/locationSlice';

export const store = configureStore({
  reducer: {
    location: locationSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});
