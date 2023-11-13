import {useAuthContext} from '@context';
import {AuthService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {MutationOptions, QueryKeys} from '@types';

export const ON_ERROR_SIGN_OUT_DEFAULT_MESSAGE =
  "The user couldn't be signed out!";

export function useSignOut(options?: MutationOptions<void>) {
  const {signOut} = AuthService();

  const {removeCredentials} = useAuthContext();

  const {mutate, error, isError, isPending, isSuccess} = useMutation({
    mutationFn: () => signOut(),
    mutationKey: [QueryKeys.SignOut],
    retry: false,
    onSuccess: () => {
      removeCredentials();

      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options?.errorMessage || ON_ERROR_SIGN_OUT_DEFAULT_MESSAGE,
        );
      }
    },
  });

  return {
    signOut: () => mutate(),
    error,
    isError,
    isPending,
    isSuccess,
  };
}
