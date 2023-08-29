import React from 'react';

import {formatRelative} from '@utils';

import {Screen, Text, Box, Avatar, RenderIf, RenderIfElse} from '@components';
import {AppScreenProps} from '@routes';

import {TabActionsBar} from './components/TabActionsBar';
import {usePostDetailsScreen} from './usePostDetailsScreen';

export function PostDetailsScreen({
  route,
}: AppScreenProps<'PostDetailsScreen'>) {
  const {postId} = route.params;

  const {post, isLoading, error} = usePostDetailsScreen(postId);

  const {
    id,
    title,
    subtitle,
    description,
    content,
    user,
    createdAt,
    _count,
    likes,
  } = post;

  function renderTabActionsBar() {
    return (
      <RenderIf
        condition={!error}
        children={
          <TabActionsBar
            postId={id}
            commentsQuantity={_count?.comments}
            likesQuantity={likes}
          />
        }
      />
    );
  }

  function renderPostDetails() {
    return (
      <>
        <Box>
          <Box gap="s8" mb="s12">
            <Text
              textTransform="uppercase"
              color="gray1"
              preset="paragraphSmall"
              semiBold>
              {subtitle}
            </Text>

            <Text preset="headingMedium" bold>
              {title}
            </Text>
          </Box>

          <Text segoe>{description}</Text>

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

        <Box>
          <Text>{content}</Text>
        </Box>
      </>
    );
  }

  return (
    <Screen
      canGoBack
      isLoading={isLoading}
      scrollable
      FooterComponent={renderTabActionsBar()}>
      <RenderIfElse
        condition={error && !isLoading}
        renderIf={<Text preset="paragraphLarge">Error</Text>}
        renderElse={renderPostDetails()}
      />
    </Screen>
  );
}
