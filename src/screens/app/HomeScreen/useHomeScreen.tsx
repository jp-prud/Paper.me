import {usePostList} from '@domain';

export function useHomeScreen() {
  const {error, isLoading, postList, refetch} = usePostList();

  return {
    refetch,
    error,
    isLoading,
    postList,
  };
}
