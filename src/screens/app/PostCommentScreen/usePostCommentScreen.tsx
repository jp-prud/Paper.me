import {PostProps} from '@domain';
import {useListCommentsByPost} from '@domain';

export function usePostCommentScreen(postId: PostProps['id']) {
  const {commentsList, refetch, error, isLoading} =
    useListCommentsByPost(postId);

  return {commentsList, refetch, error, isLoading};
}
