import {useContext} from 'react';

import {AuthServiceProps} from './Auth.types';
import {AuthContext} from './Providers/Auth';

export function useAuthContext(): AuthServiceProps {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }

  return authContext;
}
