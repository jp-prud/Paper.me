import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  return (
    <Screen title="Perfil">
      <Text>ProfileScreen</Text>
    </Screen>
  );
}
