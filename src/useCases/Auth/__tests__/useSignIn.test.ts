import {AuthService} from '@services';
import {
  mockedAuthCredentialsResponse,
  renderHook,
  signInCredentials,
  waitFor,
} from '@tests';

import {ON_ERROR_SIGN_IN_DEFAULT_MESSAGE, useSignIn} from '../useSignIn';

const mockedSignIn = jest.fn();
const mockedSaveCredentials = jest.fn();
const mockedOnSuccess = jest.fn();
const mockedOnError = jest.fn();

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
      signIn: mockedSignIn,
    }),
  };
});

describe('useSignIn', () => {
  it('saves credentials if the sign-in successfully', async () => {
    jest
      .spyOn(AuthService(), 'signIn')
      .mockResolvedValueOnce(mockedAuthCredentialsResponse);

    const {result} = renderHook(() =>
      useSignIn({
        onSuccess: mockedOnSuccess,
      }),
    );

    result.current.signIn(signInCredentials);

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedSaveCredentials).toHaveBeenCalledWith(
      mockedAuthCredentialsResponse,
    );
    expect(mockedSaveCredentials).toHaveBeenCalledTimes(1);

    expect(mockedOnSuccess).toHaveBeenCalledWith(mockedAuthCredentialsResponse);
    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
  });

  it('should calls onError if the sign-in fails', async () => {
    jest
      .spyOn(AuthService(), 'signIn')
      .mockRejectedValueOnce(new Error(ON_ERROR_SIGN_IN_DEFAULT_MESSAGE));

    const {result} = renderHook(() => useSignIn({onError: mockedOnError}));

    result.current.signIn(signInCredentials);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith(
      ON_ERROR_SIGN_IN_DEFAULT_MESSAGE,
    );
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
