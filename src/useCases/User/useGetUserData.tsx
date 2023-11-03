import {UserService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@types';

export function useGetUserData() {
  const {me} = UserService();

  const {data, isLoading, isSuccess, isError} = useQuery({
    queryKey: [QueryKeys.UserMe],
    queryFn: () => me(),
    retry: false,
    staleTime: 1000 * 60, // 1 minute
  });

  return {
    userData: data,
    isLoading,
    isError,
    isSuccess,
  };
}
