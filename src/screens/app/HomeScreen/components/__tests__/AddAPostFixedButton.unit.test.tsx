import {fireEvent, render, mockedNavigate} from '@tests';

import {AddPostFixedButton} from '../AddPostFixedButton';

describe('AddPostFixedButton - unit', () => {
  it('should render the component', () => {
    const {getByTestId, toJSON} = render(<AddPostFixedButton />);

    expect(getByTestId('add-post-fixed-button')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it("should navigate to 'PreviewPostScreen' when pressed", () => {
    const {getByTestId} = render(<AddPostFixedButton />);

    fireEvent.press(getByTestId('add-post-fixed-button'));

    expect(mockedNavigate).toHaveBeenCalledWith('PreviewPostScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
