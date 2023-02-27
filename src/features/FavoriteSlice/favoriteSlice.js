import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const placeId = action.payload;
      if (!state.favorites.includes(placeId)) {
        state.favorites.push(placeId);
        AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action) => {
      const placeId = action.payload;
      state.favorites = state.favorites.filter(id => id !== placeId);
      AsyncStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export const loadFavorites = () => async dispatch => {
  const favorites = await AsyncStorage.getItem('favorites');
  if (favorites) {
    dispatch(setFavorites(JSON.parse(favorites)));
  }
};

export default favoritesSlice.reducer;
