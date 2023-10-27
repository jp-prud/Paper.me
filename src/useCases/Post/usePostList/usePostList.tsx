import {PostService} from '@services';
import {useQuery} from '@tanstack/react-query';

export function usePostList() {
  const {listAll} = PostService();

  const {data, isFetching, isLoading, isError, refetch} = useQuery({
    queryKey: ['postList'],
    queryFn: listAll,
    staleTime: 1000 * 60, // 1 minute
  });

  return {
    postList: data,
    isLoading: isLoading || isFetching,
    error: isError,
    refetch,
  };
}
