import {UserService} from '@services';
import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '@types';

export function useGetUserData() {
  const {me} = UserService();

  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserMe],
    queryFn: () => me(),
  });

  return {
    userData: data,
    isLoading,
    error: isError,
  };
}
