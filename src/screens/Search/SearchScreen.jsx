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
import React, {useState} from 'react';
import {
  ClockIcon,
  FavoriteIcon,
  LocationIcon,
  RestaurantIcon,
  SearchIcon,
  StarIcon,
} from '../../components/Icons';
import categories from '../../data/categories';
const SearchScreen = () => {
  const [click, setclick] = useState(null);
  const renderCategory = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => setclick(index)}>
        <View
          style={{
            ...styles.categoryWrapper,
            backgroundColor: index == click ? '#E0783E' : '#1c1c1c',
          }}>
          <RestaurantIcon />
          <Text style={{padding: 8, color: '#FFFFFF'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.searchWrapper}>
        <SearchIcon />
        <TextInput
          style={styles.input}
          placeholder="Search by item"
          placeholderTextColor="#ffffff"
        />
      </View>
      <FlatList data={categories} renderItem={renderCategory} horizontal />
      <View style={styles.imgContainer}>
        <View style={styles.favBtn}>
          <FavoriteIcon />
        </View>
        <Image
          style={styles.img}
          source={{
            uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ce/a2/76/the-terrace-photo.jpg',
          }}
        />
      </View>
      <View style={styles.infoWrapper}>
        <Text
          style={{
            fontFamily: 'SF Pro Text',
            fontWeight: '400',
            fontSize: 16,
            color: '#FFFFFF',
          }}>
          Museum Inn
        </Text>
        <View style={{flexDirection: 'row', marginTop: 8}}>
          <View style={{flexDirection: 'row'}}>
            <Text>
              <LocationIcon />
            </Text>
            <Text style={{color: '#ffffff'}}>13 km</Text>
          </View>
          <View style={{flexDirection: 'row', marginHorizontal: 16}}>
            <Text>
              <ClockIcon />
            </Text>
            <Text style={{color: '#ffffff'}}>8:00 - 23:00</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>
              <StarIcon />
            </Text>
            <Text style={{color: '#ffffff'}}>4,3</Text>
          </View>
        </View>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 12,
    marginHorizontal: 4,
    paddingHorizontal: 8,
    marginTop: 20,
  },
  imgContainer: {
    width: '100%',
    height: 209,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  img: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  favBtn: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 999,
    backgroundColor: 'black',
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  infoWrapper: {
    paddingTop: 8,
    marginHorizontal: 15,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 12,
    paddingHorizontal: 12,
    borderBottomRightRadius: 12,
  },
});
