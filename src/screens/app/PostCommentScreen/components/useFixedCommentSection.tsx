import {Keyboard} from 'react-native';

import {useToastService} from '@context';
import {zodResolver} from '@hookform/resolvers/zod';
import {PostProps} from '@types';
import {useCreateComment, useGetUserData} from '@useCases';
import {useForm} from 'react-hook-form';

import {
  NewCommentFormSchemaTypes,
  NewCommentFormSchema,
} from '../newCommentFormSchema';

export function useFixedCommentSection(
  postId: PostProps['id'],
  onAddComment: () => void,
) {
  const {createComment} = useCreateComment(postId, {
    onSuccess: onCommentCreated,
  });

  const {userData} = useGetUserData();
  const {showToast, hideToast} = useToastService();

  const {
    control,
    handleSubmit,
    formState: {dirtyFields},
    reset,
  } = useForm<NewCommentFormSchemaTypes>({
    resolver: zodResolver(NewCommentFormSchema),
    defaultValues: {
      content: '',
    },
    mode: 'onSubmit',
  });

  function handleClickCreateComment(data: NewCommentFormSchemaTypes) {
    createComment({
      content: data.content,
    });
  }

  function onCommentCreated() {
    Keyboard.dismiss();
    reset();
    onAddComment();
    showToast({
      message: 'Comentário adicionado com sucesso!',
    });

    setTimeout(() => hideToast(), 2000);
  }

  return {
    control,
    handleSubmit,
    dirtyFields,
    handleClickCreateComment,
    userData,
  };
}
