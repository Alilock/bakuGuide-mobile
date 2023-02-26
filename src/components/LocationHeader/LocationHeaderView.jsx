import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from '../../library/UseLocation';
import Geocoder from 'react-native-geocoding';
import { LocationIcon } from '../Icons';
import WeatherIcon from './WeatherIcon';
import WeatherHeaderView from './WeatherHeaderView';

const LocationHeaderView = () => {
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState('');
  useLocation();
  const { latitude, longitude, error, loading } = useSelector(
    state => state.location,
  );
  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b74796c32de0943ffb3b350b82a921d6&units=metric`,)
      .then(res => res.json())
      .then(json => {
        setWeatherData(json);
      })
      .catch(err => {
        console.log('ERror', err);
      });
  };
  useEffect(() => {
    if (latitude && longitude) {
      Geocoder.init('AIzaSyBOr8iEaw-JrUGTdOZ5KpuWEmltI0L4GgU');
      Geocoder.from(latitude && latitude, longitude && longitude).then(json => {
        var addressComponent = json.results[8].formatted_address;
        setAddress(addressComponent);
      });
      fetchWeather();
    }
  }, [latitude, longitude]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.location}>
        <LocationIcon width={16} height={24} />
        <Text style={styles.text}>{address && address}</Text>
      </View>
      <View style={styles.weather}>
        {weatherData &&
          <WeatherHeaderView weatherData={weatherData} />

        }
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    maxWidth: 236,
  },
  text: {
    color: 'white',
    maxWidth: 253,
    flexWrap: 'nowrap',
    marginLeft: 8,
  },
  weather: {

  }
});
export default LocationHeaderView;
