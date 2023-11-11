import {useAuthContext} from '@context';
import {AuthService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {AuthCredentials, MutationOptions, QueryKeys, SignInDTO} from '@types';

export function useSignIn(options?: MutationOptions<AuthCredentials>) {
  const {signIn} = AuthService();

  const {saveCredentials} = useAuthContext();

  const {mutate, data, isPending, isError, isSuccess} = useMutation<
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
          options?.errorMessage || "The user couldn't be signed in!",
        );
      }
    },
  });

  return {
    signIn: (signInDTO: SignInDTO) => mutate(signInDTO),
    data,
    isPending,
    isError,
    isSuccess,
  };
}
