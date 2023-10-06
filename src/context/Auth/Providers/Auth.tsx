import {createContext, useCallback, useState} from 'react';

import {AuthProps, AuthServiceProps} from '@context';
import {AuthService, SignUpParamsDTO} from '@services';
import {delay} from '@utils';

import {useMutation} from '@hooks';

import {HttpClient} from '../../../services/utils/HttpClient';

export const AuthContext = createContext({} as AuthServiceProps & AuthProps);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const {signIn} = AuthService();
  const [isAuthenticated, setIsAuthenticate] = useState(true);

  const {mutate, isLoading} = useMutation<SignUpParamsDTO, any>(
    data => signIn(data),
    {
      onSuccess: ({accessToken}) => {
        HttpClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        setIsAuthenticate(true);
      },
      onError: () => {
        setIsAuthenticate(true);
      },
    },
  );

  const handleSignIn = useCallback(
    async (data: SignUpParamsDTO) => {
      mutate(data);
    },
    [mutate],
  );

  const handleSignUp = useCallback(async () => {
    await delay();

    setIsAuthenticate(true);
  }, []);

  const handleLogout = useCallback(async () => {
    await delay();

    setIsAuthenticate(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleSignIn,
        handleSignUp,
        handleLogout,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
