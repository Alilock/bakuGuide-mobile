import {createSlice} from '@reduxjs/toolkit';
import {favoritesStorageHelper} from '../../library/favoritesStorageHelper';

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    getAll: (state, action) => {
      state.favorites = favoritesStorageHelper.get('favorites');
    },
    addFavorites: (state, action) => {
      console.log(action);
      state.favorites.push(action.payload);
      favoritesStorageHelper.set('favorites', state.favorites);
      // console.log(state)
    },
    removeFavotires: (state, action) => {
      let id = action.payload.id;
      state.favorites = state.favorites.filter(item => item.id !== id);
      console.log('removed');
    },
  },
});

export const {addFavorites, removeFavotires, getAll} = favoriteSlice.actions;
