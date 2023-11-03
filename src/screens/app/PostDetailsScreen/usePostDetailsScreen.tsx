import {PostProps} from '@types';
import {useGetPostById} from '@useCases';

export function usePostDetailsScreen(postId: PostProps['id']) {
  const {post, isLoading, isError} = useGetPostById(postId);

  return {
    post,
    isLoading,
    isError,
  };
}
