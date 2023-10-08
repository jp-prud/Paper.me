import {useRef} from 'react';

import {usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

export function useHomeScreen() {
  const {error, isLoading, postList, refetch} = usePostList();

  const homeContentRef = useRef(null);

  useScrollToTop(homeContentRef);

  return {
    refetch,
    error,
    isLoading,
    postList,
    homeContentRef,
  };
}
