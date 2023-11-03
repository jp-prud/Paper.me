import {fireEvent, render, mockedNavigate} from '@tests';

import {HomeHeader} from '../HomeHeader';

afterEach(() => {
  jest.clearAllMocks();
});

describe('HomeHeader - unit', () => {
  it('should render the component', () => {
    const {getByTestId, toJSON} = render(<HomeHeader />);

    expect(getByTestId('home-header')).toBeDefined();
    expect(toJSON).toMatchSnapshot();
  });

  it("should navigate to 'ProfileScreen' when avatar is pressabled", () => {
    const {getByTestId} = render(<HomeHeader />);

    const avatarHeaderContainer = getByTestId('avatar-header-container');

    fireEvent.press(avatarHeaderContainer);

    expect(avatarHeaderContainer).toBeDefined();
    expect(mockedNavigate).toHaveBeenCalledWith('ProfileScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });

  it("should navigate to 'SearchScreen' when search icon is pressabled", () => {
    const {getByTestId} = render(<HomeHeader />);

    const searchHeaderContainer = getByTestId('search-header-container');

    fireEvent.press(searchHeaderContainer);

    expect(searchHeaderContainer).toBeDefined();
    expect(mockedNavigate).toHaveBeenCalledWith('SearchScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
