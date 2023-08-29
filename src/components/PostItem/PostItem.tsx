import {PostProps} from '@domain';
import {useNavigation} from '@react-navigation/native';
import {formatRelative} from '@utils';

import {Avatar} from '../Avatar/Avatar';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {Text} from '../Text/Text';

interface PostItemProps {
  post: PostProps;
}

export function PostItem({post}: PostItemProps) {
  const {id: postId, createdAt, title, description, user} = post;

  const {navigate} = useNavigation();

  function handleClickNavigationPostDetails() {
    navigate('PostDetailsScreen', {
      postId,
    });
  }

  return (
    <TouchableOpacityBox gap="s8" onPress={handleClickNavigationPostDetails}>
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

        <Box
          width={116}
          height={116}
          backgroundColor="gray1"
          borderRadius="s16"
        />
      </Box>

      <Box flexDirection="row" alignItems="center">
        {/* <Box
          width={4}
          height={4}
          backgroundColor="gray2"
          borderRadius="s8"
          marginHorizontal="s8"
        /> */}

        <Text preset="paragraphSmall" color="gray2" semiBold>
          {formatRelative(createdAt)} atrás
        </Text>
      </Box>
    </TouchableOpacityBox>
  );
}
