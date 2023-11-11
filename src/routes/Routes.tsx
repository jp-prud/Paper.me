import React from 'react';

import {useAuthContext} from '@context';
import {NavigationContainer} from '@react-navigation/native';

import {ActivityIndicator, Box} from '@components';

import {AppStackScreen} from './AppStack';
import {AuthStackScreen} from './AuthStack';

export function Router() {
  const {authCredentials, isLoading} = useAuthContext();

  if (isLoading) {
    return (
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        backgroundColor="background">
        <ActivityIndicator size="large" />
      </Box>
    );
  }

  return (
    <NavigationContainer>
      {authCredentials ? <AppStackScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
