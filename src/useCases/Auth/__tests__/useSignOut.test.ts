import {AuthService} from '@services';
import {renderHook, waitFor} from '@tests';

import {useSignOut, ON_ERROR_SIGN_OUT_DEFAULT_MESSAGE} from '../useSignOut';

const mockedRemoveCredentials = jest.fn();

const mockedSignOut = jest.fn();

const mockedOnSuccess = jest.fn();

const mockedOnError = jest.fn();

jest.mock('@context', () => {
  const originalModule = jest.requireActual('@context');

  return {
    ...originalModule,
    useAuthContext: () => ({
      removeCredentials: mockedRemoveCredentials,
    }),
  };
});

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');

  return {
    ...originalModule,
    AuthService: () => ({
      signOut: mockedSignOut,
    }),
  };
});

describe('useSignOut', () => {
  it('should sign-out and clear credentials', async () => {
    const {result} = renderHook(() =>
      useSignOut({
        onSuccess: mockedOnSuccess,
      }),
    );

    result.current.signOut();

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(mockedRemoveCredentials).toHaveBeenCalledTimes(1);
    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
  });

  it('should call onError if sign-out fails', async () => {
    jest
      .spyOn(AuthService(), 'signOut')
      .mockRejectedValueOnce(new Error(ON_ERROR_SIGN_OUT_DEFAULT_MESSAGE));

    const {result} = renderHook(() =>
      useSignOut({
        onError: mockedOnError,
      }),
    );

    result.current.signOut();

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith(
      ON_ERROR_SIGN_OUT_DEFAULT_MESSAGE,
    );
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
