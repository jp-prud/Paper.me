import {createContext, useCallback, useEffect, useState} from 'react';

import {AuthServiceProps} from '@context';
import {AuthService} from '@services';
import {AuthCredentials} from '@types';
import {delay} from '@utils';

import {authCredentialsStorage} from '../authCredentialsStorage';

export const AuthContext = createContext({} as AuthServiceProps);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const {updateAccessToken, removeAccessToken} = AuthService();

  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadCredentials = useCallback(async () => {
    await delay();

    try {
      const credentials = await authCredentialsStorage.load();

      if (credentials) {
        updateAccessToken(credentials.accessToken);
        setAuthCredentials(credentials);
      }
    } catch (error) {
      // TODO: Handle error
    } finally {
      setIsLoading(false);
    }
  }, [updateAccessToken]);

  async function saveCredentials(credentials: AuthCredentials) {
    await delay();

    updateAccessToken(credentials.accessToken);
    authCredentialsStorage.save(credentials);
    setAuthCredentials(credentials);
    setIsLoading(false);
  }

  async function removeCredentials() {
    await delay();

    removeAccessToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
    setIsLoading(false);
  }

  useEffect(() => {
    loadCredentials();
  }, [loadCredentials]);

  return (
    <AuthContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
