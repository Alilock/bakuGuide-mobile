import React from 'react';
import { StyleSheet, Image } from 'react-native';

const WeatherIcon = ({ condition, size = 40 }) => {
  let iconSource;

  switch (condition) {
    case 'Clear':
      iconSource = require('./clear.png');
      break;
    case 'Clouds':
      iconSource = require('./clouds.png');
      break;
    case 'Rain':
      iconSource = require('./rain.png');
      break;
    case 'Snow':
      iconSource = require('./snow.png');
      break;
    default:
      iconSource = require('./default.png');
      break;
  }

  return (
    <Image
      source={iconSource}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
};

export default WeatherIcon;

// Styles
const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
  },
});
