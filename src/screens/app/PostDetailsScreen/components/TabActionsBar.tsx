import {useNavigation} from '@react-navigation/native';
import {PostProps} from '@types';

import {Box, Icon, IconName, Text, TouchableOpacityBox} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

interface TabActionsBarProps {
  postId: PostProps['id'];
  commentsQuantity: PostProps['_count']['comments'];
  likesQuantity: PostProps['likes'];
}

interface TabBarOptionProps {
  content: string;
  onPress: () => void;
  icon: IconName;
}

export function TabActionsBar({
  postId,
  commentsQuantity,
  likesQuantity,
}: TabActionsBarProps) {
  const {navigate} = useNavigation();

  function handleClickLike() {}

  const {bottom} = useAppSafeArea();

  function handleClickComment() {
    navigate('PostCommentScreen', {
      postId,
    });
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      backgroundColor="white"
      paddingHorizontal="s24"
      gap="s16"
      pt="s12"
      style={[{paddingBottom: bottom + 8}, $shadowProps]}>
      <TabBarOption
        icon="heart"
        content={String(likesQuantity)}
        onPress={handleClickLike}
      />

      <TabBarOption
        icon="message"
        content={String(commentsQuantity)}
        onPress={handleClickComment}
      />
    </Box>
  );
}

function TabBarOption({content, onPress, icon}: TabBarOptionProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      flexDirection="row"
      justifyContent="center"
      backgroundColor="neutral100"
      paddingHorizontal="s16"
      borderRadius="s32"
      onPress={onPress}
      gap="s8"
      height={46}>
      <Icon name={icon} color="neutral700" />
      <Text textAlign="center" color="neutral700" semiBold>
        {content}
      </Text>
    </TouchableOpacityBox>
  );
}
