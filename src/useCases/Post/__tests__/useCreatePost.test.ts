import {PostService} from '@services';
import {postListMock, renderHook, waitFor} from '@tests';

import {useCreatePost} from '../useCreatePost';

const mockedCreatePost = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    PostService: () => ({
      create: mockedCreatePost,
    }),
  };
});

describe('useCreatePost', () => {
  it('should create a new post and return success', async () => {
    const mockedOnSuccess = jest.fn();

    const {result} = renderHook(() =>
      useCreatePost({
        onSuccess: mockedOnSuccess,
      }),
    );

    result.current.createPost(postListMock[0]);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
  });

  it('calls the onError function with a message if createPost fails', async () => {
    const errorMessage = "The post couldn't be created!";

    const mockedOnError = jest.fn();
    const postService = PostService();

    jest
      .spyOn(postService, 'create')
      .mockRejectedValue(new Error(errorMessage));

    const {result} = renderHook(() =>
      useCreatePost({
        onError: mockedOnError,
      }),
    );

    result.current.createPost(postListMock[0]);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith(errorMessage);
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
