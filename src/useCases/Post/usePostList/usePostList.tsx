import {useCallback, useEffect, useState} from 'react';

import {PostService} from '@services';
import {PostProps} from '@types';

export function usePostList() {
  const [postList, setPostList] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await PostService().listAll();

      setPostList(response);
    } catch (erro) {
      setError(true);

      console.error(erro);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    postList,
    isLoading,
    error,
    refetch: fetchData,
    fetchData,
  };
}
