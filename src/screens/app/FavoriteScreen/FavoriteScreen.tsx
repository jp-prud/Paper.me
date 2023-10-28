import {FlatList, ListRenderItemInfo} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, Screen, Tabs, FixedButton, IconProps} from '@components';
import {AppScreenProps} from '@routes';

import {FavoriteCard as Card} from './components/FavoriteCard/FavoriteCard';
import {FavoriteList} from './mocks/FavoriteList';

export interface FavoriteCard {
  id: string;
  icon: IconProps['name'];
  title: string;
  description: string;
  images: {
    id: string;
    image: string;
  }[];
}

export function FavoriteScreen({}: AppScreenProps<'FavoriteScreen'>) {
  const {navigate} = useNavigation();

  function handlePressFavoriteCard(favoriteListId: string) {
    navigate('FavoriteDetailsListScreen', {
      favoriteListId,
    });
  }

  function renderFavoriteListCard({item}: ListRenderItemInfo<FavoriteCard>) {
    return <Card data={item} onPress={handlePressFavoriteCard} />;
  }

  return (
    <Screen
      title="Suas listas"
      FooterComponent={<FixedButton onPress={() => {}} icon="add" />}>
      <Tabs list={['Salvas', 'Recentes', 'Destaques']} />

      <Box mt="s12">
        <FlatList
          data={FavoriteList}
          keyExtractor={data => String(data.id)}
          renderItem={renderFavoriteListCard}
        />
      </Box>

      <Box mt="s24" gap="s24" />
    </Screen>
  );
}
