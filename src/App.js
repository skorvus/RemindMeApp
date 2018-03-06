/**
 * Remind Me App
 * Remind App for iOS and Android
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import IntroScreen from './screens/IntroScreen';
import TasksScreen from './screens/TasksScreen';
import AddTaskModal from './modals/AddTaskModal';


//Or Export this...
const ScreenStack = StackNavigator(
  {
    Home: { screen: IntroScreen },
    Tasks: { screen: TasksScreen }
  },
  {//parametro para desactivar barra superior
    headerMode: 'none'
  }
);
//TODO: Delete Header... headerMode: 'none'


export default class App extends Component<Props> {
  render(){
    return <ScreenStack />;
  }
}
