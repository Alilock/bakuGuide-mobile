import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/Home/HomeScreen';
import DetailScreen from '../../../screens/Detail/DetailScreen';
import LocationHeaderView from '../../../components/LocationHeader/LocationHeaderView';

const Index = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
        header: () => <LocationHeaderView />
      }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>

  );
};

export default Index