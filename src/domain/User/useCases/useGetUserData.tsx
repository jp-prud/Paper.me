import {useCallback, useEffect, useState} from 'react';

import UserService from '../../../services/UserService';

export function useGetUserData() {
  const [userData, setUserData] = useState({} as any);

  const getUserData = useCallback(async () => {
    const response = await UserService.me();

    setUserData(response);
  }, []);

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return {
    userData,
  };
}
