import React, {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch} from 'react-redux';
import {locationSlice} from '../features/LocationSlice/locationSlice';

const {setLoading, setLocation, setError} = locationSlice.actions;

const useLocation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestLocationPermission = async () => {
      dispatch(setLoading(true));
      try {
        console.log(Platform.OS);
        let granted = false;
        if (Platform.OS === 'android') {
          granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
        } else if (Platform.OS === 'ios') {
          granted = await Geolocation.requestAuthorization('whenInUse');
        }
        if (granted === 'granted') {
          Geolocation.getCurrentPosition(
            position => {
              dispatch(
                setLocation({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                }),
              );
            },
            error => {
              dispatch(setError(error.message));
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
          );
        } else {
          dispatch(setError('Location permission denied'));
        }
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    requestLocationPermission();
  }, [dispatch]);

  return null;
};

export default useLocation;
