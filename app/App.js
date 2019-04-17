import {PlatForm, StyleSheet, Text, View,AsyncStorage,ActivityIndicator,StatusBar} from 'react-native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Profile from './screens/Profile';
import BookDetails from './screens/BookDetails';
import BookList from './screens/BookList';
import Hantar from './screens/Hantar';
import RequestForm from './screens/RequestForm';
import Signup from './screens/Signup';
import Signin from './screens/Signin';

let screen = Dimensions.get('window');

export const AppSwitchNavigator = createSwitchNavigator({
  Signup:{
    screen:Signup,
    navigationOptions:({navigation}) => ({
      header:null,
    }),
  },
  Signin:{
    screen:Signin,
    navigationOptions:({navigation}) => ({
      header:null,
    }),
  },
  Profile:{
    screen:Profile,
    navigationOptions:({navigation}) => ({
      header:null,
    }),
  },
  BookList:{
    screen:BookList,
    navigationOptions:({navigation}) => ({
      header:null,
    }),
  },
    BookDetails:{
      screen: BookDetails,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      }),
    },
    RequestForm:{
      screen: RequestForm,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      }),
    },
    Hantar:{
      screen:Hantar,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      })
    }
  });


export const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
