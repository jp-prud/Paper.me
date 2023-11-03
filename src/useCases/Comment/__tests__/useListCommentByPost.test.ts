import {
  QueryObserverSuccessResult,
  RefetchOptions,
} from '@tanstack/react-query';
import {renderHook, waitFor, postListMock, commentMock} from '@tests';
import {CommentProps} from '@types';

import {useListCommentsByPost} from '../useListCommentsByPost';

// const mockedListByPost = jest.fn();

// jest.mock('@services', () => {
//   const originalModule = jest.requireActual('@services');

//   return {
//     ...originalModule,
//     CommentService: () => ({
//       listByPost: () => mockedListByPost,
//     }),
//   };
// });

describe('useListCommentsByPost', () => {
  const mockedPost = postListMock[0];

  it('should get correctly commentsList from post', async () => {
    const {result} = renderHook(() => useListCommentsByPost(mockedPost.id));

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());

    const {isLoading, isError, commentsList} = result.current;

    expect(commentsList).toEqual(commentMock);
    expect(isLoading).toBeFalsy();
    expect(isError).toBeFalsy();
  });

  it('should get commentsList when called refetch method', async () => {
    const {result} = renderHook(() => useListCommentsByPost(mockedPost.id));

    const refetchDataMock = jest
      .spyOn(result.current, 'refetch')
      .mockImplementation(async (options?: RefetchOptions) => {
        return {
          data: commentMock,
          isLoading: false,
          isError: false,
          ...options,
        } as unknown as QueryObserverSuccessResult<CommentProps[], Error>;
      });

    result.current.refetch();

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(refetchDataMock).toHaveBeenCalledTimes(1);
    });

    const {commentsList, isError} = result.current;

    expect(commentsList).toEqual(commentMock);
    expect(isError).toBeFalsy();
  });
});
