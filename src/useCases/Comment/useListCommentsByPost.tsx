import {useCallback, useEffect, useState} from 'react';

import {CommentService} from '@services';
import {CommentProps, PostProps} from '@types';

export function useListCommentsByPost(postId: PostProps['id']) {
  const {getCommentsByPost} = CommentService();

  const [commentsList, setCommentsList] = useState<CommentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCommentsList = useCallback(async () => {
    try {
      const data = await getCommentsByPost(postId);

      setCommentsList(data);
    } catch (erro) {
      console.error(erro);

      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [postId, getCommentsByPost]);

  useEffect(() => {
    getCommentsList();
  }, [getCommentsList]);

  return {
    refetch: getCommentsList,
    commentsList,
    isLoading,
    error,
  };
}
