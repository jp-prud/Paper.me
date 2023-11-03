import {fireEvent, render, mockedNavigate} from '@tests';

import {HomeEmptyPostList} from '../HomeEmptyPostList';
describe('HomeEmptyPostList - unit', () => {
  it('should render the component', () => {
    const {getByTestId, toJSON} = render(<HomeEmptyPostList />);

    expect(getByTestId('home-empty-post-list')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it("should navigate to 'PreviewPostScreen' when click on CTA", () => {
    const {getByText} = render(<HomeEmptyPostList />);

    const button = getByText('Criar post');

    fireEvent.press(button);

    expect(mockedNavigate).toHaveBeenCalledWith('PreviewPostScreen');
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
  });
});
