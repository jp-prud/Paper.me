import {useCallback, useEffect, useState} from 'react';

import PostService from '../../../services/PostService';
import {PostProps} from '../Post.types';

export function usePostList() {
  const [postList, setPostList] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await PostService.listAll();

      setPostList(response);
    } catch (erro) {
      setError(true);

      console.log(erro);
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
  };
}
