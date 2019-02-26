import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { HomeScreen, HotelScreen }  from '../screens';
import constants from '../config/constants';

const screenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Hotels: {
      screen: HotelScreen,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
      headerStyle: {
        backgroundColor: constants.PRIMARY_BG_COLOR,
        borderBottomColor: constants.PRIMARY_BG_COLOR,
        borderBottomWidth: 5
      },
      headerTintColor: constants.PRIMARY_TEXT_COLOR,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
);

export default createAppContainer(screenStack);