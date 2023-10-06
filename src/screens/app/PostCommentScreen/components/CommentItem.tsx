import {CommentProps} from '@types';
import {formatRelative} from '@utils';

import {Box, Avatar, TouchableOpacityBox, Icon, Text} from '@components';

export interface CommentItemProps {
  comment: CommentProps;
}

export function CommentItem({comment}: CommentItemProps) {
  const {content, createdAt, likes, user} = comment;

  return (
    <Box gap="s8">
      <Box flexDirection="row" alignItems="center" gap="s8">
        <Avatar user={user} size={36} />

        <Box>
          <Text semiBold>{user.name}</Text>

          <Text preset="paragraphSmall" color="gray2">
            {formatRelative(createdAt)} atrás
          </Text>
        </Box>
      </Box>

      <Box>
        <Text color="gray1">{content}</Text>
      </Box>

      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        mt="s8">
        <TouchableOpacityBox flexDirection="row" alignItems="center" gap="s4">
          <Icon name="heart" color="gray1" />
          <Text color="gray1" preset="paragraphSmall">
            Curtir ({likes})
          </Text>
        </TouchableOpacityBox>

        <Icon name="heart" />
      </Box>
    </Box>
  );
}
