import {SignUpDTO} from '@types';

export function useSignUp() {
  return {
    signUp: (signUpDTO: SignUpDTO) => console.log(signUpDTO),
  };
}
