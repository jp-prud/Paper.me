import {useToastService} from '@context';
import {zodResolver} from '@hookform/resolvers/zod';
import {useSignUp} from '@useCases';
import {useForm} from 'react-hook-form';

import {SignUpFormSchema, SignUpFormSchemaTypes} from './signUpFormSchema';

const defaultValues: SignUpFormSchemaTypes = {
  username: '',
  fullName: '',
  email: '',
  password: '',
};

export function useSignUpScreen() {
  const {showToast, hideToast} = useToastService();

  const {signUp, isPending} = useSignUp({
    onError: errorMessage => {
      console.log(errorMessage);

      showToast({
        message: 'Error al crear la cuenta',
      });

      hideToast();
    },
  });

  const {control, handleSubmit} = useForm<SignUpFormSchemaTypes>({
    defaultValues: {
      ...defaultValues,
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = handleSubmit(async data => {
    const {username, fullName, email, password} = data;

    signUp({username, fullName, email, password, avatar: ''});
  });

  return {control, onSubmit, isPending};
}
