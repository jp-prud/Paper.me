import {Pressable} from 'react-native';

import {Box, Icon, Text} from '@components';

import {FavoriteCard as IFavoriteCard} from '../../FavoriteScreen';

interface Props {
  data: IFavoriteCard;
  onPress(id: string): void;
}

export function FavoriteCard({data, onPress}: Props) {
  const {id, title, description, icon} = data;

  return (
    <Pressable onPress={() => onPress(id)}>
      <Box gap="s16" backgroundColor="white" p="s16" borderRadius="s16">
        <Box gap="s12">
          <Box flexDirection="row" gap="s8">
            <Icon name={icon} />
            <Text bold>{title}</Text>
          </Box>
          <Text>{description}</Text>
        </Box>

        <Box flexDirection="row" gap="s8">
          <Box
            backgroundColor="amber100"
            height={148}
            flex={1}
            borderRadius="s8"
          />

          <Box gap="s8" flex={1}>
            <Box flex={1} backgroundColor="amber1000" borderRadius="s8" />
            <Box flex={1} backgroundColor="amber1000" borderRadius="s8" />
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
}
