import {useCallback, useEffect, useState} from 'react';

import {PostService} from '@services';
import {PostProps} from '@types';

export function useGetPostById(postId: PostProps['id']) {
  const {findById} = PostService();

  const [postData, setPostData] = useState<PostProps>({} as PostProps);
  const [isLoading, setISLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const post = await findById(postId);

      setPostData(post);
    } catch (erro) {
      console.error(erro);

      setError(true);
    } finally {
      setISLoading(false);
    }
  }, [postId, findById]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    post: postData,
    isLoading,
    error,
  };
}
