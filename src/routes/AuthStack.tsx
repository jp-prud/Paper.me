import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignInScreen, SignUpScreen, RecoveryPasswordScreen} from '../screens';

import {
  AuthStackParamList,
  NAVIGATOR_STACK_SCREEN_OPTIONS,
} from './navigationTypes';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamList>();

export function AuthStackScreen() {
  return (
    <Navigator
      initialRouteName="SignInScreen"
      screenOptions={NAVIGATOR_STACK_SCREEN_OPTIONS}>
      <Screen name="SignInScreen" component={SignInScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
      />
    </Navigator>
  );
}
