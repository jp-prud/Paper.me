import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function CategoryScreen({route}: AppScreenProps<'CategoryScreen'>) {
  const {categoryId} = route.params;

  console.log(categoryId);

  return (
    <Screen>
      <Text>oi</Text>
    </Screen>
  );
}
