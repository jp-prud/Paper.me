import {useCallback, useEffect, useState} from 'react';

import UserService from '../../../services/UserService';

export function useGetUserData() {
  const [userData, setUserData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await UserService.me();

      setUserData(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {
    isLoading,
    userData,
  };
}
