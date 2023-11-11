import {AuthCredentials, SignInDTO} from '@types';
import {delay} from '@utils';

import {HttpClient} from '../utils/HttpClient';

export function AuthService() {
  async function signIn(signInDTO: SignInDTO) {
    const response = await HttpClient.post<AuthCredentials>(
      'auth/signin',
      signInDTO,
    );

    return response.data;
  }

  async function signUp() {}

  async function signOut() {
    await delay();

    return Promise.resolve();
  }

  function updateAccessToken(accessToken: AuthCredentials['accessToken']) {
    HttpClient.defaults.headers.Authorization = `Bearer ${accessToken}`;
  }

  function removeAccessToken() {
    HttpClient.defaults.headers.Authorization = null;
  }

  return {
    signIn,
    signUp,
    signOut,
    updateAccessToken,
    removeAccessToken,
  };
}
