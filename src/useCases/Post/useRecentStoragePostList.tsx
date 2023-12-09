import {storage} from '@services';
import {useQuery} from '@tanstack/react-query';
import {PostProps, StorageKeys} from '@types';

export function useRecentStoragePostList() {
  const {data, isLoading, error, isError} = useQuery<
    unknown,
    unknown,
    PostProps[]
  >({
    queryKey: [StorageKeys.Posts],
    queryFn: () => storage.getItem(StorageKeys.Posts),
    retry: false,
  });

  return {
    data,
    isLoading,
    error,
    isError,
  };
}
