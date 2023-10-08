import {useRef} from 'react';

import {useScrollToTop} from '@react-navigation/native';
import {usePostList} from '@useCases';

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
