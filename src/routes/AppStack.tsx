import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  PostDetailsScreen,
  PostCommentScreen,
  ProfileScreen,
  SearchScreen,
  CategoryScreen,
} from '../screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

export function AppStackScreen() {
  return (
    <Navigator
      initialRouteName="HomeScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
      <Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Screen name="ProfileScreen" component={ProfileScreen} />
      <Screen name="SearchScreen" component={SearchScreen} />
      <Screen name="CategoryScreen" component={CategoryScreen} />
    </Navigator>
  );
}
