import {Box, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

import {CategoryItem, SearchPostItem} from './components';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  return (
    <Screen canGoBack title="Search">
      <TextInput placeholder="Search Paper.me" />

      <Box mt="s12" mb="s16" flexDirection="row" alignItems="center" gap="s8">
        <Box flex={1} height={1} backgroundColor="gray4" />
        <Text
          textTransform="uppercase"
          preset="paragraphCaption"
          bold
          color="gray1">
          🌟{'  '}Featured this week
        </Text>
        <Box flex={1} height={1} backgroundColor="gray4" />
      </Box>

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

      <Text preset="paragraphLarge" bold marginVertical="s16">
        Categories
      </Text>

      <CategoryItem
        category={{
          id: '1',
          icon: '🍔',
          name: 'Food',
        }}
      />
    </Screen>
  );
}
