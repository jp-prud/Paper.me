import {CommentService} from '@services';
import {renderHook, waitFor, postListMock} from '@tests';

import {useCreateComment} from '../useCreateComment';

const mockedCreateComment = jest.fn();

jest.mock('@services', () => {
  const originalModule = jest.requireActual('@services');
  return {
    ...originalModule,
    CommentService: () => ({
      create: mockedCreateComment,
    }),
  };
});

describe('useCreateComment', () => {
  const mockedPost = postListMock[0];

  // TO-DO: Create a mocked comment

  const mockedComment = {
    content: 'This is a comment',
  };

  it('should create a new comment and return success', async () => {
    const mockedOnSuccess = jest.fn();

    const {result} = renderHook(() =>
      useCreateComment(mockedPost.id, {
        onSuccess: mockedOnSuccess,
      }),
    );

    result.current.createComment(mockedComment);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(mockedOnSuccess).toHaveBeenCalledTimes(1);
  });

  it('calls the onError function with a message if createComment fails', async () => {
    const errorMessage = "The comment couldn't be created!";

    const mockedOnError = jest.fn();
    const commentSevice = CommentService();

    jest
      .spyOn(commentSevice, 'create')
      .mockRejectedValue(new Error(errorMessage));

    const {result} = renderHook(() =>
      useCreateComment(mockedPost.id, {
        onError: mockedOnError,
      }),
    );

    result.current.createComment(mockedComment);

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(mockedOnError).toHaveBeenCalledWith(errorMessage);
    expect(mockedOnError).toHaveBeenCalledTimes(1);
  });
});
