import {useGetUserData, useRecentStoragePostList} from '@useCases';

export function useProfileScreen() {
  const {userData, isLoading, isError} = useGetUserData();

  const {data: recentPostList} = useRecentStoragePostList();

  return {
    userData,
    isLoading,
    isError,
    recentPostList,
  };
}
