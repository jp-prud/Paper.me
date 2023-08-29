import {useAuthService} from '@context';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  SignInFormSchemaTypes,
  SignInFormSchema,
} from './signInScreenFormSchema';

export function useSignInScreen() {
  const {isLoading, handleSignIn} = useAuthService();

  const {control, handleSubmit} = useForm<SignInFormSchemaTypes>({
    defaultValues: {
      email: 'takeoff@mail.com',
      password: 'youngtake',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const {email, password} = data;

    handleSignIn({email, password});
  });

  return {
    control,
    onSubmit,
    isLoading,
  };
}
