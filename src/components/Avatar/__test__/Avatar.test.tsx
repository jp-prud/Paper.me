import {render} from '../../../../test/test-utils';
import {Avatar, AvatarProps} from '../Avatar';

const avatarMock: AvatarProps = {
  user: {
    avatar: 'avatar',
    name: 'Jhon Doe',
  },
};

describe('Avatar', () => {
  describe('User data was passed', () => {
    it('should render the component', () => {
      const {getByTestId} = render(<Avatar {...avatarMock} />);

      expect(getByTestId('Avatar')).toBeTruthy();
    });
  });
});
