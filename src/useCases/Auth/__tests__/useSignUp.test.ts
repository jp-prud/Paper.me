import {AuthService} from '@services';
import {
  mockedAuthCredentialsResponse,
  renderHook,
  signUpCredentials,
  waitFor,
} from '@tests';

import {ON_ERROR_DEFAULT_MESSAGE, useSignUp} from '../useSignUp';

const mockedOnSucces = jest.fn();
const mockedOnError = jest.fn();
const mockedSaveCredentials = jest.fn();
const mockedSignUp = jest.fn();

jest.mock('@context', () => {
  const originalModule = jest.requireActual('@context');

  return {
    ...originalModule,
    useAuthContext: () => ({
      saveCredentials: mockedSaveCredentials,
    }),
  };
});

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');

  return {
    ...originalModule,
    AuthService: () => ({
      signUp: mockedSignUp,
    }),
  };
});

describe('useSignUp', () => {
  it('should create a new account and call onSuccess', async () => {
    jest
      .spyOn(AuthService(), 'signUp')
      .mockResolvedValueOnce(mockedAuthCredentialsResponse);

    const {result} = renderHook(() =>
      useSignUp({
        onSuccess: mockedOnSucces,
      }),
    );

    result.current.signUp(signUpCredentials);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(mockedSaveCredentials).toHaveBeenCalledTimes(1);
    expect(mockedSaveCredentials).toHaveBeenCalledWith(
      mockedAuthCredentialsResponse,
    );

    expect(mockedOnSucces).toHaveBeenCalledTimes(1);
    expect(mockedOnSucces).toHaveBeenCalledWith(mockedAuthCredentialsResponse);
  });

  it('should call onError if the sign up fails', async () => {
    jest
      .spyOn(AuthService(), 'signUp')
      .mockRejectedValueOnce(new Error(ON_ERROR_DEFAULT_MESSAGE));

    const {result} = renderHook(() =>
      useSignUp({
        onError: mockedOnError,
      }),
    );

    result.current.signUp(signUpCredentials);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith(ON_ERROR_DEFAULT_MESSAGE);
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
