import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BrokenClouds, ClearSkyDay, Mist } from '../Icons'
import { ClearSkyNight } from '../Icons'
import { format, parseISO } from 'date-fns';
import { RainDay } from '../Icons'
import { RainNight } from '../Icons'
import { ScatteredCloudgNight } from '../Icons'
import { ScatteredCloudsDay } from '../Icons'
import { ShoweRain } from '../Icons'
import { Snow } from '../Icons'
import { Thunderstorm } from '../Icons'
const WeatherHeaderView = ({ weatherData }) => {
    const [isDay, setIsDay] = useState('')

    useEffect(() => {
        const currentTime = new Date();

        if (weatherData && weatherData.sys && weatherData.sys.sunrise && weatherData.sys.sunset) {

            const sunriseTime = parseISO(format(new Date(weatherData.sys.sunrise * 1000), 'yyyy-MM-dd\'T\'HH:mm:ss'));
            const sunsetTime = parseISO(format(new Date(weatherData.sys.sunset * 1000), 'yyyy-MM-dd\'T\'HH:mm:ss'));

            if (currentTime >= sunriseTime && currentTime < sunsetTime) {
                setIsDay(true);
            } else {
                setIsDay(false);
            }
        }
    }, []);
    return (
        <View style={styles.container}>
            <WeatherIcon condition={weatherData && weatherData.weather[0].main} isDay={isDay} />
            <Text style={styles.text}>{weatherData && weatherData.main.temp > 0 ? "+" + weatherData.main.temp : weatherData.main.temp}</Text>
        </View>
    )
}

export default WeatherHeaderView

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#262626",
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 12,
        gap: 8
    },
    text: {
        color: "#fff"
    }
})


const WeatherIcon = ({ condition, size = 16, isDay }) => {
    let iconComponent;

    switch (condition) {
        case 'Clear':
            iconComponent = isDay ? <ClearSkyDay width={size} height={size} /> : <ClearSkyNight width={size} height={size} />
            break;
        case 'Clouds':
            iconComponent = <BrokenClouds width={size} height={size} />
            break;
        case "Thunderstorm":
            iconComponent = <Thunderstorm width={size} height={size} />
            break
        case "Rain":
            iconComponent = isDay ? <RainDay width={size} height={size} /> : <RainNight width={size} height={size} />
        case "Snow":
            iconComponent = <Snow width={size} height={size} />
            break
        case "Atmosphere":
            iconComponent = <Mist width={size} height={size} />
        case "Drizzle":
            iconComponent = isDay ? <RainDay width={size} height={size} /> : <RainNight width={size} height={size} />
            break
        default:
            iconComponent = null;
    }

    return iconComponent;
};
