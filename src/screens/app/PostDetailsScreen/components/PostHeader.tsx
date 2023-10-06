import {Image} from 'react-native';

import {PostProps} from '@types';
import {formatRelative} from '@utils';

import {Avatar, Box, Text, RenderIf} from '@components';

interface PostHeaderProps {
  post: Partial<PostProps>;
  isLoading: boolean;
}

export function PostHeader({post, isLoading}: PostHeaderProps) {
  const {title, subtitle, description, user, createdAt, thumbnail} = post;

  return (
    <Box>
      <Box gap="s8" mb="s12">
        <Text
          textTransform="uppercase"
          preset="paragraphCaption"
          color="neutral700"
          semiBold>
          {subtitle?.trim()}
        </Text>

        <Text preset="headingMedium" color="neutral900" bold>
          {title?.trim()}
        </Text>
      </Box>

      <RenderIf
        condition={Boolean(thumbnail)}
        children={
          <Box borderRadius="s16" overflow="hidden" mb="s16">
            <Image
              source={{uri: thumbnail}}
              style={{width: '100%', height: 200}}
            />
          </Box>
        }
      />

      <Text color="neutral800">{description?.trim()}</Text>

      <Box
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        mb="s16"
        mt="s8"
        paddingVertical="s16"
        borderBottomWidth={1}
        borderColor="gray4">
        <Box>
          <Text
            textTransform="uppercase"
            letterSpacing={0.8}
            bold
            preset="paragraphCaption">
            {user?.name}
          </Text>

          <Text color="gray2" preset="paragraphSmall">
            {!isLoading && formatRelative(createdAt)} atrás
          </Text>
        </Box>

        <Avatar user={user} />
      </Box>
    </Box>
  );
}
