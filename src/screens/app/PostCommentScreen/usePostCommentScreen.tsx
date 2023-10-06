import {useListCommentsByPost} from '@domain';
import {PostProps} from '@types';

export function usePostCommentScreen(postId: PostProps['id']) {
  const {commentsList, refetch, error, isLoading} =
    useListCommentsByPost(postId);

  return {commentsList, refetch, error, isLoading};
}
