import {render, renderCustomScreenComponent} from '@tests';

import {HomeHeader} from '../components';
import {HomeScreen} from '../HomeScreen';

describe('HomeScreen - unit', () => {
  it('should render the componet', () => {
    const {toJSON} = render(
      <HomeScreen navigation={undefined} route={undefined} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render HomeHeader when not isLoading and no error', () => {
    const {getByTestId} = renderCustomScreenComponent({
      customHeader: <HomeHeader />,
      children: <></>,
    });

    expect(getByTestId('home-header')).toBeTruthy();
  });
});
