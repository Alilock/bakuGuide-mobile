import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './stack/Home';
import SearchStack from './stack/Search';
import FavoriteStack from './stack/Favorite';
import {FavoriteIcon, Homeicon, SearchIcon} from '../components/Icons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={({route}) => ({
            tabBarIcon: ({color}) => <Homeicon />,
          })}
        />
        <Tab.Screen
          name="Search"
          component={SearchStack}
          options={({route}) => ({
            tabBarIcon: ({color}) => <SearchIcon />,
          })}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteStack}
          options={({route}) => ({
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({color}) => <FavoriteIcon />,
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({});
