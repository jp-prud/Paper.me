import {render, userMock} from '@tests';

import {Avatar} from '../Avatar';

describe('<Avatar />', () => {
  it('should render the component', () => {
    const {getByTestId} = render(<Avatar user={userMock} />);

    expect(getByTestId('avatar-component')).toBeTruthy();
  });
});
