import {fireEvent, render} from '@tests';
import {IconProps} from 'src/components/Icon/Icon';

import {FixedButton} from '../FixedButton';

const mockOnPress = jest.fn();

describe('<FixedButton />', () => {
  it('should render the component with correctly props', () => {
    const mappedIconName: IconProps['name'] = 'pencil';

    const {getByTestId} = render(
      <FixedButton onPress={mockOnPress} icon={mappedIconName} />,
    );

    const fixedButton = getByTestId('fixed-button');
    const icon = getByTestId(`icon-${mappedIconName}`);

    fireEvent(fixedButton, 'press');

    expect(fixedButton).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
