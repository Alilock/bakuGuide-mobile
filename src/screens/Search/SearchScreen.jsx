import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import {
  ClockIcon,
  FavoriteIcon,
  LocationIcon,
  RestaurantIcon,
  SearchIcon,
  StarIcon,
} from '../../components/Icons';
import categories from '../../data/categories';
import PlaceCard from '../../components/Card/PlaceCard';
import places from '../../data/places';
const SearchScreen = () => {
  const [click, setclick] = useState(null);
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setclick(index)}>
        <View
          style={{
            ...styles.categoryWrapper,
            backgroundColor: index == click ? '#E0783E' : '#1c1c1c',
          }}>
          <Image
            source={item.image}
            style={{ width: 14, height: 22, resizeMode: 'contain' }}
          />
          <Text style={{ color: '#FFFFFF' }}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.searchWrapper}>
        <SearchIcon stroke={'#fff'} width={16} />
        <TextInput
          style={styles.input}
          placeholder="Search by item"
          placeholderTextColor="#b9b9b9"
        />
      </View>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategory}
        contentContainerStyle={{ marginHorizontal: 16 }}
        horizontal
      />
      <FlatList
        data={places}
        contentContainerStyle={{ marginHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PlaceCard item={item} />}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingHorizontal: 12,
    marginTop: 20,
    backgroundColor: '#262626',
    borderRadius: 12,
  },
  input: {
    height: 40,
    width: '90%',
  },
  categoryWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 12,
    marginHorizontal: 4,
    marginBottom: 27,
    marginTop: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 8,
  },
});
