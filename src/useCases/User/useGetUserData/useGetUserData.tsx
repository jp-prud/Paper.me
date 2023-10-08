import {useCallback, useEffect, useState} from 'react';

import {UserService} from '@services';

export function useGetUserData() {
  const {me} = UserService();

  const [userData, setUserData] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserData = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await me();

      setUserData(response);
    } catch (erro) {
      setError(true);

      console.error(erro);
    } finally {
      setIsLoading(false);
    }
  }, [me]);

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
