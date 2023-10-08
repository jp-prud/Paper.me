import {useCallback, useEffect, useState} from 'react';

import UserService from '../../../services/UserService/UserService';

export function useGetUserData() {
  // const {me} = UserService();

  const [userData, setUserData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await UserService.me();

      setUserData(response);
    } catch (erro) {
      setError(true);

      console.error(erro);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {
    isLoading,
    error,
    userData,
    getUserData,
  };
}
