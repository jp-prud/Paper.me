import {render, mockUser} from '@tests';

import {Avatar} from '../Avatar';

describe('<Avatar />', () => {
  it('should render the component', () => {
    const {getByTestId} = render(<Avatar user={mockUser} />);

    expect(getByTestId('avatar-component')).toBeTruthy();
  });
});
