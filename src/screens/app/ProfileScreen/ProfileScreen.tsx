import {useSignOut} from '@useCases';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const {signOut, isPending} = useSignOut();

  return (
    <Screen title="Perfil">
      <Text>ProfileScreen</Text>

      <Button text="Sair" onPress={signOut} loading={isPending} />
    </Screen>
  );
}
