import React from 'react';
import {useWindowDimensions} from 'react-native';

import RenderHTML from 'react-native-render-html';

import {Screen, Text, RenderIf, RenderIfElse, $fontSizes} from '@components';
import {AppScreenProps} from '@routes';
import {$shadowProps} from '@theme';
import {theme} from '@theme';

import {PostHeader, UpgradePlanAlert, TabActionsBar} from './components';
import {usePostDetailsScreen} from './usePostDetailsScreen';

export function PostDetailsScreen({
  route,
}: AppScreenProps<'PostDetailsScreen'>) {
  const {postId} = route.params;
  const {width} = useWindowDimensions();

  const {post, isLoading, isError} = usePostDetailsScreen(postId);

  function renderTabActionsBar() {
    return (
      <RenderIf
        condition={!isError}
        children={
          <TabActionsBar
            postId={post?.id}
            commentsQuantity={post?._count?.comments}
            likesQuantity={post?.likes}
          />
        }
      />
    );
  }

  function renderPostDetails() {
    return (
      <>
        <PostHeader post={{...post}} isLoading={isLoading} />

        <RenderHTML
          contentWidth={width}
          source={{
            html: `<div>${post?.content}</div>`,
          }}
          tagsStyles={$htmlElementStyles}
        />

        <UpgradePlanAlert />
      </>
    );
  }

  return (
    <Screen
      canGoBack
      isLoading={isLoading}
      scrollable
      FooterComponent={renderTabActionsBar()}
      footerContainerStyle={[$shadowProps, {paddingBottom: 0}]}>
      <RenderIfElse
        condition={isError && !isLoading}
        renderIf={<Text preset="paragraphLarge">isError</Text>}
        renderElse={renderPostDetails()}
      />
    </Screen>
  );
}

const $htmlElementStyles = {
  div: {
    ...$fontSizes.paragraphMedium,
    color: theme.colors.neutral700,
  },
  h1: {
    ...$fontSizes.headingMedium,
    margin: 0,
  },
  b: {
    ...$fontSizes.paragraphMedium,
  },
  li: {
    ...$fontSizes.paragraphMedium,
  },
  i: {
    ...$fontSizes.paragraphMedium,
  },
};
