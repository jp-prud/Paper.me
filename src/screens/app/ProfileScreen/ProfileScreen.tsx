import {useGetUserData} from '@domain';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function ProfileScreen({}: AppScreenProps<'ProfileScreen'>) {
  const {userData} = useGetUserData();

  console.log(userData);

  return (
    <Screen canGoBack>
      <Text>ProfileScreen</Text>
    </Screen>
  );
}
