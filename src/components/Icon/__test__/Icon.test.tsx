import {fireEvent, render} from '../../../../test/test-utils';
import {Icon, IconProps} from '../Icon';

const iconMockWithoutPressFunction: IconProps = {
  name: 'article',
};

const iconMock: IconProps = {
  name: 'article',
  onPress: jest.fn(),
};

describe('Icon', () => {
  it('should render the component', () => {
    const {getByTestId} = render(<Icon {...iconMock} />);

    expect(getByTestId('Icon')).toBeTruthy();
  });

  it('should render the component without press function', () => {
    const {getByTestId} = render(<Icon {...iconMockWithoutPressFunction} />);

    const event = fireEvent.press(getByTestId('Icon'));

    expect(event).toHaveBeenCalledTimes(1);
  });
});
