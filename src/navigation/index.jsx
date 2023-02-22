import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './stack/Home';
import SearchStack from './stack/Search';
import FavoriteStack from './stack/Favorite';
import { FavoriteIcon, Homeicon, SearchIcon } from '../components/Icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#1c1c1c",
        tabBarInactiveBackgroundColor: "#1c1c1c",
      }}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({ route }) => ({

            tabBarIcon: ({ color, focused }) => <Homeicon stroke={focused ? "#E0783E" : "#414141"} />,
          })}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={({ route }) => ({
            tabBarIcon: ({ color, focused }) => <SearchIcon stroke={focused ? "#E0783E" : "#414141"} />,
          })}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteStack}
          options={({ route }) => ({
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({ color, focused }) => <FavoriteIcon stroke={focused ? "#E0783E" : "#414141"} />,
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
