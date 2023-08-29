import {useCallback, useEffect, useState} from 'react';

import {CommentProps, PostProps} from '@domain';

import CommentService from '../../../services/CommentService';

export function useListCommentsByPost(postId: PostProps['id']) {
  const [commentsList, setCommentsList] = useState<CommentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCommentsList = useCallback(async () => {
    try {
      const data = await CommentService.getCommentsByPost(postId);

      setCommentsList(data);
    } catch (erro) {
      console.log(erro);

      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, [postId]);

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
