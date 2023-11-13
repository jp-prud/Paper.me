import {useAuthContext} from '@context';
import {AuthService} from '@services';
import {useMutation} from '@tanstack/react-query';
import {AuthCredentials, MutationOptions, QueryKeys, SignUpDTO} from '@types';

export const ON_ERROR_DEFAULT_MESSAGE = "The user couldn't be signed up!";

export function useSignUp(options?: MutationOptions<AuthCredentials>) {
  const {signUp} = AuthService();
  const {saveCredentials} = useAuthContext();

  const {mutate, data, isPending, isError, error, isSuccess} = useMutation<
    AuthCredentials,
    unknown,
    SignUpDTO
  >({
    mutationKey: [QueryKeys.SignUp],
    mutationFn: signUpDTO => signUp(signUpDTO),
    retry: false,
    onSuccess: authCredentials => {
      saveCredentials(authCredentials);

      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || ON_ERROR_DEFAULT_MESSAGE);
      }
    },
  });

  return {
    signUp: (signUpDTO: SignUpDTO) => mutate(signUpDTO),
    data,
    isPending,
    isError,
    error,
    isSuccess,
  };
}
