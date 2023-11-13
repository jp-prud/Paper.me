import {useAuthContext} from '@context';
import {AuthService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {AuthCredentials, MutationOptions, QueryKeys, SignInDTO} from '@types';

export const ON_ERROR_SIGN_IN_DEFAULT_MESSAGE =
  "The user couldn't be signed in!";

export function useSignIn(options?: MutationOptions<AuthCredentials>) {
  const {signIn} = AuthService();

  const {saveCredentials} = useAuthContext();

  const {mutate, data, isPending, isError, error, isSuccess} = useMutation<
    AuthCredentials,
    unknown,
    SignInDTO
  >({
    mutationFn: signInDTO => signIn(signInDTO),
    mutationKey: [QueryKeys.SignIn],
    retry: false,
    onSuccess: authCredentials => {
      saveCredentials(authCredentials);

      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(
          options?.errorMessage || ON_ERROR_SIGN_IN_DEFAULT_MESSAGE,
        );
      }
    },
  });

  return {
    signIn: (signInDTO: SignInDTO) => mutate(signInDTO),
    error,
    data,
    isPending,
    isError,
    isSuccess,
  };
}
