import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import {useSignIn} from '@useCases';
import {useForm} from 'react-hook-form';

import {
  SignInFormSchemaTypes,
  SignInFormSchema,
} from './signInScreenFormSchema';

const defaultValues: SignInFormSchemaTypes = {
  email: '',
  password: '',
};

export function useSignInScreen() {
  const {navigate} = useNavigation();

  const {isPending, signIn} = useSignIn();

  const {control, handleSubmit} = useForm<SignInFormSchemaTypes>({
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(SignInFormSchema),
  });

  function onSignUpPress() {
    navigate('SignUpScreen');
  }

  const onSubmit = handleSubmit(async data => {
    const {email, password} = data;

    signIn({email, password});
  });

  return {
    control,
    isPending,
    onSubmit,
    onSignUpPress,
  };
}
