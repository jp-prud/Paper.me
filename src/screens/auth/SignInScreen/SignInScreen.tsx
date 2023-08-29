import {
  Screen,
  Text,
  FormTextInput,
  Box,
  Button,
  FormPasswordInput,
} from '@components';

import {useSignInScreen} from './useSignInScreen';

export function SignInScreen() {
  const {control, onSubmit, isLoading} = useSignInScreen();

  return (
    <Screen scrollable>
      <Box gap="s16" mb="s24">
        <Text preset="headingMedium">Bem vindo(a)! 🙂</Text>
        <Text>
          Acesse o aplicativo e leia sobre os principais artigos e projetos
          acadêmicos da área do seu interesse.
        </Text>
      </Box>

      <Box gap="s16">
        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Insira seu e-mail"
        />
        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          placeholder="Insira sua senha"
        />
        <Button text="Acessar" onPress={onSubmit} loading={isLoading} />
      </Box>
    </Screen>
  );
}
