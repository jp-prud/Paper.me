import {PostService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@types';

export function usePostList() {
  const {listAll} = PostService();

  const {data, isFetching, isSuccess, isLoading, isError, refetch} = useQuery({
    queryKey: [QueryKeys.ListPost],
    queryFn: listAll,
    retry: false,
    staleTime: 1000 * 60, // 1 minute
  });

  return {
    postList: data,
    isLoading: isLoading || isFetching,
    isError,
    isSuccess,
    refetch,
  };
}
