import {zodResolver} from '@hookform/resolvers/zod';
import {useSignIn} from '@useCases';
import {useForm} from 'react-hook-form';

import {
  SignInFormSchemaTypes,
  SignInFormSchema,
} from './signInScreenFormSchema';

export function useSignInScreen() {
  const {isPending, signIn} = useSignIn();

  const {control, handleSubmit} = useForm<SignInFormSchemaTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const {email, password} = data;

    signIn({email, password});
  });

  return {
    control,
    onSubmit,
    isPending,
  };
}
