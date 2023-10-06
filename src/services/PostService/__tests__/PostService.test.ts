import {mockPostList} from 'test';

import {PostService} from '../PostService';

describe('PostService', () => {
  describe('ListAll method', () => {
    it('when listAll is called, should be able to list all posts', async () => {
      const {listAll} = PostService();

      const postListResponse = await listAll();

      expect(postListResponse).toEqual(mockPostList);
    });

    it.todo('should throw an error when the request fails');
  });
});
