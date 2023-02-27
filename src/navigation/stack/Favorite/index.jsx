import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import PlaceFavoriteCard from '../../../components/Card/PlaceFavoriteCard';
import {useDispatch} from 'react-redux';
import {getAll} from '../../../features/FavoriteSlice/favoriteSlice';
import {favoritesStorageHelper} from '../../../library/favoritesStorageHelper';

const Index = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.favorites);
  useEffect(() => {
    dispatch(getAll());
    console.log(cart);
  }, []);

  const renderItem = ({item}) => {
    return <PlaceFavoriteCard item={item} />;
  };

  return (
    <>
      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
