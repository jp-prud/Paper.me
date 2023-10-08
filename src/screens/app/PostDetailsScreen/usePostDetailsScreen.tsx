import {PostProps} from '@types';
import {useGetPostById} from '@useCases';

export function usePostDetailsScreen(postId: PostProps['id']) {
  const {post, isLoading, error} = useGetPostById(postId);

  return {
    post,
    isLoading,
    error,
  };
}
