import {useCallback, useEffect, useState} from 'react';

import PostService from '../../../services/PostService';
import {PostProps} from '../Post.types';

export function usePostById(postId: PostProps['id']) {
  const [postData, setPostData] = useState<PostProps>({} as PostProps);
  const [isLoading, setISLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const post = await PostService.findById(postId);

      setPostData(post);
    } catch (erro) {
      console.log(erro);

      setError(true);
    } finally {
      setISLoading(false);
    }
  }, [postId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    post: postData,
    isLoading,
    error,
  };
}
