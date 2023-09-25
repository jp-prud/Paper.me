import {Box, Screen, Tabs, Text, TextInput, TitleBar} from '@components';
import {AppScreenProps} from '@routes';

import {CategoryItem, SearchPostItem} from './components';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  return (
    <Screen canGoBack title="Busca">
      <TextInput placeholder="Search Paper.me" />

      <Box mt="s16" mb="s16" height={1} backgroundColor="neutral100" />

      <Tabs list={['Crypto', 'Tecnologia', 'Finanças', 'Saúde']} />

      <TitleBar title="Novidades" linkText="Ver mais" mb="s24" mt="s20" />

      <SearchPostItem
        post={{
          id: '1',
          title: 'How to make a good coffee',
          user: {
            name: 'John Doe',
            avatar: 'https://i.pravatar.cc/300?img=1',
          },
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nisl nisl ultri lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nisl nisl ultricies.',
        }}
      />

      <TitleBar title="Todas as categorias" mt="s24" mb="s24" />

      <Box flexDirection="row" gap="s16">
        <CategoryItem
          category={{
            id: '1',
            icon: '🍔',
            name: 'Food',
          }}
        />

        <CategoryItem
          category={{
            id: '1',
            icon: '🌑',
            name: 'Crypto',
          }}
        />

        <CategoryItem
          category={{
            id: '1',
            icon: '🍎',
            name: 'Saúde',
          }}
        />
      </Box>
    </Screen>
  );
}
