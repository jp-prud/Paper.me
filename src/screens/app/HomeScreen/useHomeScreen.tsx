import {useRef} from 'react';

import {useScrollToTop} from '@react-navigation/native';
import {usePostList} from '@useCases';

export function useHomeScreen() {
  const {isError, isLoading, postList, refetch} = usePostList();

  const homeContentRef = useRef(null);

  useScrollToTop(homeContentRef);

  return {
    refetch,
    isError,
    isLoading,
    postList,
    homeContentRef,
  };
}
