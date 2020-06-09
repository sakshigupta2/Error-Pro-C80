import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Exchange from '../screens/Exchange';
import HomeScreen from '../screens/HomeScreen';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/home.png")} style = {{width: 25, height: 25}} />,
            tabBarLabel: "Home Screen"
        }

    },
    
    Exchange: {
        screen: Exchange,
        navigationOptions: {
            tabBarIcon: <Image source = {require("../assets/exchange.png")} style = {{width: 25, height: 25}} />,
            tabBarLabel: "Exchange"
        }
    }
}) 