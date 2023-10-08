import {act, mockPostList} from '@tests';

import {PostService} from '../PostService';

describe('PostService', () => {
  describe('ListAll method', () => {
    it('when listAll is called, should be able to list all posts', async () => {
      const {listAll} = PostService();

      let postListResponse;

      await act(async () => {
        postListResponse = await listAll();
      });

      expect(postListResponse).toEqual(mockPostList);
    });

    it.todo('should throw an error when the request fails');
  });
});
