import {fireEvent, render} from '@tests';
import {mockedNavigate} from 'jestSetupFile.js';

import {HomeHeader} from '../HomeHeader';

afterEach(() => {
  jest.clearAllMocks();
});

describe('HomeHeader', () => {
  it.skip('should render the component', () => {
    const {getByTestId} = render(<HomeHeader />);

    expect(getByTestId('home-header')).toBeTruthy();
  });

  it.skip("should navigate to 'ProfileScreen' when avatar is pressabled", () => {
    const {getByTestId} = render(<HomeHeader />);

    const avatarHeaderContainer = getByTestId('avatar-header-container');

    fireEvent.press(avatarHeaderContainer);

    expect(avatarHeaderContainer).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });

  it.skip("should navigate to 'SearchScreen' when search icon is pressabled", () => {
    const {getByTestId} = render(<HomeHeader />);

    const searchHeaderContainer = getByTestId('search-header-container');

    fireEvent.press(searchHeaderContainer);

    expect(searchHeaderContainer).toBeTruthy();
    expect(mockedNavigate).toHaveBeenCalledWith('SearchScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
