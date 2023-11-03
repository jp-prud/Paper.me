import React from 'react';

import {useAuth} from '@context';
import {NavigationContainer} from '@react-navigation/native';

import {AppStackScreen} from './AppStack';
import {AuthStackScreen} from './AuthStack';

export function Router() {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
