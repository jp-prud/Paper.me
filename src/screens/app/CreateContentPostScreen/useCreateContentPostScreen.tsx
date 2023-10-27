import {useCallback, useRef, useState} from 'react';

import {useToastService} from '@context';
import {useNavigation} from '@react-navigation/native';
import {CreatePostDTO} from '@types';
import {useCreatePost} from '@useCases';
import {emptyContentPost} from '@utils';

interface useCreateContentPostScreenProps {
  post: CreatePostDTO;
}

export function useCreateContentPostScreen({
  post,
}: useCreateContentPostScreenProps) {
  const [articleContent, setArticleContent] = useState('');
  const RichTextReference = useRef();

  const navigation = useNavigation();

  const {createPost, error, isLoading} = useCreatePost({
    options: {
      onError: onPostError,
      onSuccess: onPostCreated,
    },
  });

  const {showToast, hideToast} = useToastService();

  const handleChangeArticleContent = useCallback(
    (text: string) => setArticleContent(text),
    [],
  );

  function onPostCreated() {
    showToast({
      message: 'Seu post foi criado com sucesso!',
      position: 'bottom',
    });

    setTimeout(() => {
      hideToast();

      navigation.navigate('HomeScreen');
    }, 1800);
  }

  function onPostError() {
    showToast({
      message: 'Erro ao criar post!',
    });

    setTimeout(() => hideToast(), 1800);
  }

  const handlePressCreatePost = useCallback(() => {
    const isEmptyContentPost = emptyContentPost(articleContent);

    if (isEmptyContentPost) {
      showToast({
        message: 'O conteúdo do post não pode ser vazio!',
        position: 'top',
        type: 'error',
      });

      setTimeout(() => hideToast(), 1800);

      return;
    }

    createPost({
      ...post,
      content: articleContent,
    });

    RichTextReference?.current?.dismissKeyboard();
  }, [articleContent, createPost, post, showToast, hideToast]);

  return {
    RichTextReference,
    articleContent,
    handleChangeArticleContent,
    handlePressCreatePost,
    error,
    isLoading,
  };
}
