import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import OnBoarding from './src/components/OnBoarding/OnBoarding'
const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <OnBoarding />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c"
  }
})