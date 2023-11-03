import {PostService} from '@services';
import {postListMock, renderHook, waitFor} from '@tests';

import {useGetPostById} from '../useGetPostById';

const mockedPost = postListMock[0];

const mockedFindById = jest.fn(() => mockedPost);

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    PostService: () => ({
      findById: mockedFindById,
    }),
  };
});

describe('useGetPostById', () => {
  it('should return a post by id', async () => {
    const {result} = renderHook(() => useGetPostById(mockedPost.id));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    const {post, isError} = result.current;

    expect(post).toEqual(mockedPost);
    expect(isError).toBe(false);
  });

  it('should return an error if post not found', async () => {
    const errorMessage = "The post couldn't be found!";

    const postService = PostService();

    jest
      .spyOn(postService, 'findById')
      .mockRejectedValueOnce(new Error(errorMessage));

    const {result} = renderHook(() => useGetPostById('2'));

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });

    const {post, isSuccess, isLoading} = result.current;

    expect(post).toBeUndefined();
    expect(isSuccess).toBe(false);
    expect(isLoading).toBe(false);
  });
});
