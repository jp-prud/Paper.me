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

const defaultValues: NewCommentFormSchemaTypes = {
  content: '',
};

export function useFixedCommentSection(postId: PostProps['id']) {
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
      ...defaultValues,
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
    showToast({
      message: 'Comentário adicionado com sucesso!',
    });

    hideToast();
  }

  return {
    control,
    handleSubmit,
    dirtyFields,
    handleClickCreateComment,
    userData,
  };
}
