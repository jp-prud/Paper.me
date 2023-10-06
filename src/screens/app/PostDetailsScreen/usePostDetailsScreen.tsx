import {useGetPostById} from '@domain';
import {PostProps} from '@types';

export function usePostDetailsScreen(postId: PostProps['id']) {
  const {post, isLoading, error} = useGetPostById(postId);

  return {
    post,
    isLoading,
    error,
  };
}
