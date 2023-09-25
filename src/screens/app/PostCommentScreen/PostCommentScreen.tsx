import {FlatList, ListRenderItemInfo} from 'react-native';

import {CommentProps} from '@domain';

import {Box, Screen} from '@components';
import {AppScreenProps} from '@routes';

import {CommentItem} from './components/CommentItem';
import {FixedCommentSection} from './components/FixedCommentSection';
import {usePostCommentScreen} from './usePostCommentScreen';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const {postId} = route.params;

  const {commentsList, isLoading, refetch} = usePostCommentScreen(postId);

  function renderCommentItem({item}: ListRenderItemInfo<CommentProps>) {
    return <CommentItem comment={item} />;
  }

  function renderSeparator() {
    return (
      <Box
        height={1}
        paddingHorizontal="s16"
        backgroundColor="gray4"
        marginVertical="s16"
      />
    );
  }

  return (
    <Screen
      canGoBack
      FooterComponent={
        <FixedCommentSection postId={postId} onAddComment={refetch} />
      }
      title={`Comentários (${commentsList.length})`}
      isLoading={isLoading}>
      <FlatList
        data={commentsList}
        keyExtractor={comment => String(comment.id)}
        renderItem={renderCommentItem}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}
