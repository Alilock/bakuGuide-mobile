import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAll } from '../../../features/FavoriteSlice/favoriteSlice';
import { favoritesStorageHelper } from '../../../library/favoritesStorageHelper';
import places from '../../../data/places';
import PlaceCard from '../../../components/Card/PlaceCard';
const Index = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorite.favorites);

  let favoritesItems = places.filter(p => favorites.includes(p.id))

  const renderItem = ({ item }) => {
    return <PlaceCard item={item} />;
  };

  return (
    <>
      <FlatList
        data={favoritesItems}
        contentContainerStyle={{ marginHorizontal: 16 }}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
