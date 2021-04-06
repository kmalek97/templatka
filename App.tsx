/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

import LandingScreen from './src/screens/LandingScreen/LandingScreen';

const switchNavigator = createSwitchNavigator({
  landingStack: {
    screen: createStackNavigator(
      {
        Landing: LandingScreen,
      },
      {
        defaultNavigationOptions: {
          headerShown: false,
        },
      },
    ),
  },

  homeStack: createBottomTabNavigator({
    Home: {
      screen: createStackNavigator({
        HomePage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let icon =
            focused === true
              ? require('./src/images/home_icon.png')
              : require('./src/images/home_n_icon.png');

          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let icon =
            focused === true
              ? require('./src/images/offer_icon.png')
              : require('./src/images/offer_n_icon.png');

          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let icon =
            focused === true
              ? require('./src/images/cart_icon.png')
              : require('./src/images/cart_n_icon.png');

          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen,
      }),
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          let icon =
            focused === true
              ? require('./src/images/account_icon.png')
              : require('./src/images/account_n_icon.png');

          return <Image source={icon} style={styles.tabIcon} />;
        },
      },
    },
  }),
});

const AppNavigation = createAppContainer(switchNavigator);

const App = () => {
  return <AppNavigation />;
};

export default App;

const styles = StyleSheet.create({
  tabIcon: {
    width: 30,
    height: 30,
  },
});
