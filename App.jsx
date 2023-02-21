import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import OnBoardingContainer from './src/screens/OnBoarding/OnBoardingContainer';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigation from './src/navigation/index';

const App = () => {
 
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    // <OnBoardingContainer />

    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
});
