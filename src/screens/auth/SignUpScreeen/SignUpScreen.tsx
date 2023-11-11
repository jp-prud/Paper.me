import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
  Text,
} from '@components';
import {AuthScreenProps} from '@routes';

import {useSignUpScreen} from './useSignUpScreen';

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {control, onSubmit} = useSignUpScreen();

  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Criar uma conta</Text>

      <Box gap="s16" mt="s32" mb="s48">
        <FormTextInput
          control={control}
          name="username"
          label="Seu username"
          prefix="@"
        />

        <FormTextInput
          control={control}
          name="fullName"
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />
      </Box>

      <Button text="Criar minha conta" onPress={onSubmit} />
    </Screen>
  );
}
