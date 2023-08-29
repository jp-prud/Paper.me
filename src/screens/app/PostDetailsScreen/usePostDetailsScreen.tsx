import {PostProps} from '@domain';
import {usePostById} from '@domain';

export function usePostDetailsScreen(postId: PostProps['id']) {
  const {post, isLoading, error} = usePostById(postId);

  return {
    post,
    isLoading,
    error,
  };
}
