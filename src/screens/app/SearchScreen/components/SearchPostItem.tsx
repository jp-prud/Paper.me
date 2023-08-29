import {Pressable} from 'react-native';

import {PostProps} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Text} from '@components';

interface SearchPostItemProps {
  post: Pick<PostProps, 'id' | 'title' | 'user' | 'description'>;
}

export function SearchPostItem({post}: SearchPostItemProps) {
  const {id, title, description, user} = post;

  const {navigate} = useNavigation();

  function handleClickNavigateToPostScreen() {
    navigate('PostDetailsScreen', {postId: id});
  }

  return (
    <Pressable onPress={handleClickNavigateToPostScreen}>
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Box width={72} height={72} borderRadius="s8" backgroundColor="gray1" />

        <Box gap="s4">
          <Text preset="paragraphLarge" bold>
            {title}
          </Text>
          <Text preset="paragraphSmall" color="gray1">
            por {user.name}
          </Text>
        </Box>
      </Box>

      <Box mt="s12">
        <Text numberOfLines={4} color="gray1" preset="paragraphSmall">
          {description}
        </Text>
      </Box>
    </Pressable>
  );
}
