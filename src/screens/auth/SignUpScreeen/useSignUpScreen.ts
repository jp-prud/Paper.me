import {zodResolver} from '@hookform/resolvers/zod';
import {useSignUp} from '@useCases';
import {useForm} from 'react-hook-form';

import {SignUpFormSchema, SignUpFormSchemaTypes} from './signUpFormSchema';

export function useSignUpScreen() {
  const {signUp} = useSignUp();

  const {control, handleSubmit} = useForm<SignUpFormSchemaTypes>({
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const {username, fullName, email, password} = data;

    signUp({username, fullName, email, password});
  });

  return {control, onSubmit};
}
