import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnBoardingContainer from './src/screens/OnBoarding/OnBoardingContainer';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './src/navigation/index';
import { LogBox } from 'react-native';
const App = () => {
  LogBox.ignoreAllLogs();
  const [isOnboarding, setIsOnBoarding] = useState(true)

  const checkOnBoarding = async () => {
    try {
      const value = await AsyncStorage.getItem("suggestedCategories")
      if (value !== null) {
        setIsOnBoarding(false)
      }
    } catch (error) {
      console.log("Error onboarding", error)
    }
  }

  useEffect(() => {
    AsyncStorage.clear()
    SplashScreen.hide();
    checkOnBoarding()
  }, []);
  return (

    <NavigationContainer>

      {!isOnboarding ?
        <TabNavigation />
        :
        <OnBoardingContainer setIsOnBoarding={setIsOnBoarding} />

      }
    </NavigationContainer>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
});
