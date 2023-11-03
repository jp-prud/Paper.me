import {PostProps} from '@types';
import {useListCommentsByPost} from '@useCases';

export function usePostCommentScreen(postId: PostProps['id']) {
  const {commentsList, isError, isLoading} = useListCommentsByPost(postId);

  return {commentsList, isError, isLoading};
}
