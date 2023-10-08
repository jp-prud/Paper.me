import {PostProps} from '@types';
import {useListCommentsByPost} from '@useCases';

export function usePostCommentScreen(postId: PostProps['id']) {
  const {commentsList, refetch, error, isLoading} =
    useListCommentsByPost(postId);

  return {commentsList, refetch, error, isLoading};
}
