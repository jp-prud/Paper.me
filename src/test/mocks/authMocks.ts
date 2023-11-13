import {AuthCredentials, SignInDTO, SignUpDTO} from '@types';

export const signInCredentials: SignInDTO = {
  email: 'jprudencio@mail.com',
  password: 'password',
};

export const signUpCredentials: SignUpDTO = {
  username: 'jprudencio',
  fullName: 'João Prudêncio',
  email: 'jprudencio@gmail.com',
  password: 'password',
  avatar: 'https://avatars.githubusercontent.com/u/26466516?v=4',
};

export const mockedAuthCredentialsResponse: AuthCredentials = {
  accessToken: 'access_token',
};
