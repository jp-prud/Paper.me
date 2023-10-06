import {useCallback, useEffect, useState} from 'react';

import {PostService} from '@services';

import {PostProps} from '../../Post.types';

export function usePostList() {
  const {listAll} = PostService();

  const [postList, setPostList] = useState<PostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const response = await listAll();

      setPostList(response);
    } catch (erro) {
      setError(true);

      console.error(erro);
    } finally {
      setIsLoading(false);
    }
  }, [listAll]);

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
