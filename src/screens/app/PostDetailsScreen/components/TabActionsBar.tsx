import {PostProps} from '@domain';
import {useNavigation} from '@react-navigation/native';

import {Box, Icon, Text, TouchableOpacityBox} from '@components';

interface TabActionsBarProps {
  postId: PostProps['id'];
  commentsQuantity: PostProps['_count']['comments'];
  likesQuantity: PostProps['likes'];
}

export function TabActionsBar({
  postId,
  commentsQuantity,
  likesQuantity,
}: TabActionsBarProps) {
  const {navigate} = useNavigation();

  function handleClickLike() {}

  function handleClickComment() {
    navigate('PostCommentScreen', {
      postId,
    });
  }

  function handleClickShare() {}

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      borderTopWidth={1}
      borderTopColor="gray1"
      backgroundColor="background"
      height={46}>
      <TouchableOpacityBox
        flex={1}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        onPress={handleClickLike}
        gap="s8">
        <Icon name="heart" />
        <Text textAlign="center">{likesQuantity}</Text>
      </TouchableOpacityBox>

      <TouchableOpacityBox
        flex={1}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        onPress={handleClickComment}
        gap="s8">
        <Icon name="message" />
        <Text textAlign="center">{commentsQuantity}</Text>
      </TouchableOpacityBox>

      <TouchableOpacityBox
        flex={1}
        alignItems="center"
        flexDirection="row"
        justifyContent="center"
        gap="s8"
        onPress={handleClickShare}>
        <Icon name="reload" />
        <Text textAlign="center">1</Text>
      </TouchableOpacityBox>
    </Box>
  );
}
