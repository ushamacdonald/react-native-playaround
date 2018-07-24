import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import store from '../store';

import MainScreen from './MainScreen';
import HomeScreen from './HomeScreen';

export default class App extends React.Component {
  render() {
    return <MainStack />;
  }
}

const MainStack = createStackNavigator({
  Main: MainScreen,
  Home: HomeScreen
});
