import React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { ClockIcon } from '../Icons';
import { ClubIcon } from '../Icons';

const WeatherIcon = ({ condition, size = 40 }) => {
    let iconComponent;

    switch (condition) {
        case 'Clear':
            iconComponent = <ClockIcon width={size} height={size} />;
            break;
        case 'Clouds':
            iconComponent = <ClubIcon width={size} height={size} />;
            break;
        default:
            iconComponent = null;
    }

    return iconComponent;
};

export default WeatherIcon;

// Styles
const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 40,
    },
});
