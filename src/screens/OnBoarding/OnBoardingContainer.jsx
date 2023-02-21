import { View, Text } from 'react-native'
import React from 'react'
import OnBoarding from './OnBoarding'
import SuggestCategoryScreen from './SuggestCategoryScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
const Stack = createNativeStackNavigator();
const OnBoardingContainer = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Onboarding" component={OnBoarding} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="SuggestCategory" component={SuggestCategoryScreen} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default OnBoardingContainer