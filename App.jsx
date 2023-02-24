import { View, Text, StyleSheet, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingContainer from './src/screens/OnBoarding/OnBoardingContainer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/index';
import { LogBox } from 'react-native';
import { store } from './src/features';
import { Provider } from 'react-redux';
const App = () => {
  LogBox.ignoreAllLogs();
  const [isOnboarding, setIsOnBoarding] = useState(true);
  const [loading, setloading] = useState(true);

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem('suggestedCategories');
      if (value !== null) {
        setIsOnBoarding(false);
        setloading(false);
      }
    } catch (error) {
      console.log('Error onboarding', error);
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    checkOnBoarding();
  }, []);
  const MyTheme = {
    colors: {
      background: '#1c1c1c',
    },
  };
  return (
    <Provider store={store}>

      <NavigationContainer theme={MyTheme}>
        {!isOnboarding ? (
          <TabNavigation />
        ) : (
          <OnBoardingContainer setIsOnBoarding={setIsOnBoarding} />
        )}
      </NavigationContainer>

    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
});
