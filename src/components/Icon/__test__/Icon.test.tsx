import {fireEvent, render} from '@tests';

import {Icon, IconProps} from '../Icon';

const iconMock: IconProps = {
  name: 'article',
  onPress: jest.fn(),
};

describe('<Icon />', () => {
  it.skip('should render the component', () => {
    const {getByTestId} = render(<Icon {...iconMock} />);

    expect(getByTestId('Icon')).toBeTruthy();
  });

  it.skip('should render the component without press function', () => {
    const {getByTestId} = render(<Icon {...iconMock} />);

    const event = fireEvent.press(getByTestId('Icon'));

    expect(event).toHaveBeenCalledTimes(1);
  });
});
