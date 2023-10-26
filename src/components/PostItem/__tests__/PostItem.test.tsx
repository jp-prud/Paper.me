import {fireEvent, render} from '@tests';
import {mockedNavigate} from 'jestSetupFile';

import {PostItem, PostItemProps} from '../PostItem';

const postItemMock: PostItemProps = {
  post: {
    id: '1',
    title: 'lorem ipsum',
    description:
      'lore ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    subtitle: 'lorem ipsum dolor sit amet',
    user: {
      avatar: 'avatar',
      name: 'Jhon Doe',
    },
    published: true,
    userId: '1',
    content: 'content',
    type: 'ARTICLE',
    categoryId: '1',
    likes: 1,
    thumbnail: 'thumbnail',
    _count: {
      comments: 1,
    },
    createdAt: '2023-08-19T03:36:37.106Z',
    updatedAt: '2023-08-19T03:34:45.116Z',
  },
};

describe('<PostItem />', () => {
  describe('Post data was passed', () => {
    it('should render the component', () => {
      const {getByTestId} = render(<PostItem post={postItemMock.post} />);

      expect(getByTestId('PostItem')).toBeTruthy();
    });

    it('should navigate to PostDetailsScreen when click on PostItem', () => {
      const element = render(<PostItem post={postItemMock.post} />);

      fireEvent.press(element.getByTestId('PostItem'));

      expect(mockedNavigate).toHaveBeenCalledWith('PostDetailsScreen', {
        postId: postItemMock.post.id,
      });

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
    });
  });
});
