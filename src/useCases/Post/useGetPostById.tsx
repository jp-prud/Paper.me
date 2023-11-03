import {PostService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {PostProps, QueryKeys} from '@types';

export function useGetPostById(postId: PostProps['id']) {
  const {findById} = PostService();

  const {data, isSuccess, isLoading, error, isError} = useQuery({
    queryKey: [QueryKeys.GetPostById, postId],
    queryFn: () => findById(postId),
    retry: false,
  });

  return {
    post: data,
    isLoading,
    error,
    isError,
    isSuccess,
  };
}
