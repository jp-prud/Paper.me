import {Box, Button, Screen, Text, TextInput} from '@components';

export function RecoveryPasswordScreen() {
  return (
    <Screen canGoBack>
      <Box gap="s8">
        <Text preset="headingLarge">Esqueci minha senha</Text>

        <Text>
          Digite seu e-mail e enviaremos as instruções para redefinição de senha
        </Text>
      </Box>

      <Box mb="s48" mt="s32">
        <TextInput label="E-mail" placeholder="Digite seu e-mail" />
      </Box>

      <Button text="Recuperar a senha" />
    </Screen>
  );
}
