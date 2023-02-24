import React, { useEffect, useState, } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLocation from '../../library/UseLocation';
import Geocoder from "react-native-geocoding"
import { LocationIcon } from '../Icons';

const LocationHeaderView = () => {
    const [address, setAddress] = useState('')
    useLocation();
    const { latitude, longitude, error, loading } = useSelector(
        state => state.location,
    );


    useEffect(() => {
        if (latitude && longitude) {
            Geocoder.init('AIzaSyBOr8iEaw-JrUGTdOZ5KpuWEmltI0L4GgU');
            Geocoder.from(
                latitude && latitude,
                longitude && longitude,
            ).then(json => {
                console.log("sa", json.results[8]);
                var addressComponent = json.results[8].formatted_address
                setAddress(addressComponent);
            })

        }
    }, [latitude, longitude]);
    console.log("render", longitude, latitude);
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.location}>
                <LocationIcon width={16} height={24} />
                <Text style={styles.text}>{address && address}</Text>
            </View>
            <View style={styles.weather}>

            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    },
    location: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#262626",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
        maxWidth: 236

    },
    text: {
        color: 'white',
        maxWidth: 253,
        flexWrap: "nowrap",
        marginLeft: 8
    }
})
export default LocationHeaderView;
