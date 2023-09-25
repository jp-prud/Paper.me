import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  PostDetailsScreen,
  PostCommentScreen,
  ProfileScreen,
  CategoryScreen,
  PreviewPostScreen,
  CreateContentPostScreen,
} from '../screens';

import {
  AppStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';
import {TabNavigationStack} from './TabNavigationStack';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();

export function AppStackScreen() {
  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="AppTabNavigator" component={TabNavigationStack} />

      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="PostDetailsScreen" component={PostDetailsScreen} />
      <Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Screen name="PreviewPostScreen" component={PreviewPostScreen} />
      <Screen
        name="CreateContentPostScreen"
        component={CreateContentPostScreen}
      />
      <Screen name="ProfileScreen" component={ProfileScreen} />
      <Screen name="CategoryScreen" component={CategoryScreen} />
    </Navigator>
  );
}
