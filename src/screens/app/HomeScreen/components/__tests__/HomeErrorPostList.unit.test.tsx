import {render, fireEvent} from '@tests';

import {HomeErrorPostList} from '../HomeErrorPostList';

describe('HomeErrorPostList - unit', () => {
  const refetchMock = jest.fn();

  it('should render the component', () => {
    const {getByTestId, toJSON} = render(
      <HomeErrorPostList refetch={refetchMock} />,
    );

    expect(getByTestId('home-error-post-list')).toBeDefined();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call refetch when click on CTA', () => {
    const {getByText} = render(<HomeErrorPostList refetch={refetchMock} />);

    const button = getByText('Tentar novamente');

    fireEvent.press(button);

    expect(refetchMock).toHaveBeenCalledTimes(1);
  });
});
