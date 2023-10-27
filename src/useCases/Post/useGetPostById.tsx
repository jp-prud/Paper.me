import {PostService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {PostProps, QueryKeys} from '@types';

export function useGetPostById(postId: PostProps['id']) {
  const {findById} = PostService();

  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.GetPostById, postId],
    queryFn: () => findById(postId),
  });

  return {
    post: data as PostProps,
    isLoading,
    error: isError,
  };
}
