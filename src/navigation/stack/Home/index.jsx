import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Linking,
  ScrollView,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import React from 'react';
import {
  ClockIcon,
  LocationIcon,
  PhoneIcon,
  StarIcon,
} from '../../../components/Icons';
import Button from '../../../components/Buttons/Button';

const index = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.PlaceImg}
            source={{
              uri: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ce/a2/76/the-terrace-photo.jpg',
            }}
          />
        </View>
        <View style={styles.PlaceTitle}>
          <View>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontWeight: '600',
                fontFamily: 'SF Pro Text',
              }}>
              Museum Inn
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
            }}>
            <StarIcon />
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                fontWeight: '500',
                fontFamily: 'SF Pro Text',
              }}>
              4.3
            </Text>
          </View>
        </View>
        <View style={styles.PlaceInfoContainer}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'SF Pro Text',
              marginBottom: 12,
            }}>
            Information
          </Text>
          <View style={{flexDirection: 'row'}}>
            <ClockIcon />
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'SF Pro Text',
                paddingLeft: 8,
              }}>
              Mon - Fri, 08:00 - 23:00
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 8}}>
            <PhoneIcon />
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'SF Pro Text',
                paddingLeft: 8,
              }}>
              050 864 70 80
            </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 8}}>
            <LocationIcon />
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: '500',
                fontFamily: 'SF Pro Text',
                paddingLeft: 8,
              }}>
              Nizami küçəsi, 203B
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontWeight: '500',
              fontFamily: 'SF Pro Text',
              padding: 16,
            }}>
            Map
          </Text>
          <View style={styles.mapWrapper}>
            <MapView
              userInterfaceStyle={'dark'}
              showsUserLocation
              showsMyLocationButton
              style={{
                height: (windowHeight * 25) / 100,
              }}
              initialRegion={{
                latitude: 40.367077964504304,
                longitude: 49.83633909628996,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              customMapStyle={{
                elementType: 'labels.icon',
                stylers: [{visibility: 'off'}],
              }}>
              <Marker
                coordinate={{
                  latitude: 40.367077964504304,
                  longitude: 49.83633909628996,
                }}
                title={'Test'}
                description={'Testtt'}></Marker>
            </MapView>
          </View>
          <View style={styles.button}>
            <Button
              title={'Go to map'}
              onPress={() =>
                Linking.openURL(
                  'google.navigation:q=40.367077964504304+49.83633909628996',
                )
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: 250,
    paddingHorizontal: 16,
    marginTop: 50,
  },
  PlaceImg: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  PlaceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  PlaceInfoContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  mapWrapper: {
    padding: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
