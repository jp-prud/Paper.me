import {Pressable} from 'react-native';

import {
  Screen,
  Text,
  FormTextInput,
  Box,
  Button,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {useSignInScreen} from './useSignInScreen';

export function SignInScreen({}: AuthScreenProps<'SignInScreen'>) {
  const {control, onSubmit, isPending} = useSignInScreen();

  return (
    <Screen scrollable>
      <Box gap="s8" mb="s40" mt="s20">
        <Text preset="headingLarge">Olá!</Text>
        <Text>
          Acesse o aplicativo e leia sobre os principais artigos e projetos
          acadêmicos da área do seu interesse.
        </Text>
      </Box>

      <Box gap="s16" mb="s8">
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
      </Box>

      <Pressable>
        <Text bold color="primary">
          Esqueci minha senha
        </Text>
      </Pressable>

      <Box mt="s48" gap="s12">
        <Button text="Acessar" onPress={onSubmit} loading={isPending} />
        <Button text="Criar uma conta" onPress={() => {}} preset="outline" />
      </Box>
    </Screen>
  );
}
