import {Image} from 'react-native';

import {PostProps} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {formatRelative} from '@utils';

import {Avatar} from '../Avatar/Avatar';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {Text} from '../Text/Text';

import {Thumbnail} from './components/Thumbnail';

export interface PostItemProps {
  post: Pick<
    PostProps,
    'id' | 'createdAt' | 'title' | 'description' | 'user' | 'thumbnail'
  >;
}

export function PostItem({post}: PostItemProps) {
  const {id: postId, createdAt, title, description, thumbnail, user} = post;

  const {navigate} = useNavigation();

  function handleClickNavigationPostDetails() {
    navigate('PostDetailsScreen', {
      postId,
    });
  }

  return (
    <TouchableOpacityBox
      gap="s8"
      onPress={handleClickNavigationPostDetails}
      testID="PostItem"
      backgroundColor="white">
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Avatar user={user} />

        <Text preset="paragraphSmall" semiBold>
          {user?.name}
        </Text>
      </Box>

      <Box flexDirection="row" gap="s16">
        <Box gap="s8" flex={1}>
          <Text preset="paragraphLarge" numberOfLines={2} bold>
            {title}
          </Text>

          <Text
            color="gray1"
            preset="paragraphSmall"
            semiBold
            numberOfLines={3}>
            {description}
          </Text>
        </Box>

        <Thumbnail thumbnail={thumbnail} />
      </Box>

      <Box flexDirection="row" alignItems="center">
        <Text preset="paragraphSmall" color="gray2" semiBold>
          {formatRelative(createdAt)} atrás
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
