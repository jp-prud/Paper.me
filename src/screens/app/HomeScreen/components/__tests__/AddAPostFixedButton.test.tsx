import {fireEvent, render} from '@tests';
import {mockedNavigate} from 'jestSetupFile.js';

import {AddPostFixedButton} from '../AddPostFixedButton';

describe('AddPostFixedButton', () => {
  it('should render the component', () => {
    const {getByTestId} = render(<AddPostFixedButton />);

    expect(getByTestId('add-post-fixed-button')).toBeTruthy();
  });

  it("should navigate to 'PreviewPostScreen' when pressed", () => {
    const {getByTestId} = render(<AddPostFixedButton />);

    fireEvent.press(getByTestId('add-post-fixed-button'));

    expect(mockedNavigate).toHaveBeenCalledWith('PreviewPostScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
