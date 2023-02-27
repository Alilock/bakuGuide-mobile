import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { ClockIcon, FavoriteIcon, LocationIcon, StarIcon } from '../Icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, loadFavorites, removeFavorite } from '../../features/FavoriteSlice/favoriteSlice';
const PlaceCard = ({ item, width }) => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadFavorites())
  }, [])

  const favorites = useSelector(state => state.favorite.favorites);
  const isFavorite = favorites.includes(item.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(item.id));
    } else {
      dispatch(addFavorite(item.id));
    }
  };


  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <Pressable onPress={goDetail}>
      <View style={{ ...styles.container, width: width }}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={item.image} />
          <View style={styles.imageWrapper.icon}>
            <TouchableOpacity onPress={toggleFavorite}>
              {isFavorite ? (
                <FavoriteIcon width={16} height={16} fill={"#fff"} stroke={'#fff'} />
              ) : (
                <FavoriteIcon width={16} height={16} stroke={'#fff'} />

              )}
            </TouchableOpacity>

          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detail.name}>{item.name.substring(0, 23)}</Text>
          <View style={styles.features}>
            <View style={styles.location}>
              <LocationIcon width={10} height={18} />
              <Text style={styles.location.distance}>{item.distance}</Text>
            </View>
            <View style={styles.location}>
              <ClockIcon width={10} height={18} />
              <Text style={styles.location.distance}>
                {item.openadate} - {item.closedate}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => alert('salam')}
              style={styles.location}>
              <StarIcon width={10} height={18} />
              <Text style={styles.location.distance}>{item.rate}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  image: {
    height: 209,
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  detail: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderColor: '#262626',
    name: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
      marginBottom: 4,
    },
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    distance: {
      fontSize: 10,
      color: 'white',
    },
  },
  imageWrapper: {
    position: 'relative',
    icon: {
      position: 'absolute',
      padding: 8,
      backgroundColor: '#1c1c1c',
      borderRadius: 16,
      right: 16,
      top: 16,
    },
  },
});
