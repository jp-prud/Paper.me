import {renderCustomScreenComponent} from '@tests';

import {HomeHeader} from '../components';

describe('HomeScreen', () => {
  it.skip('should render HomeHeader when not isLoading and no error', () => {
    const {getByTestId} = renderCustomScreenComponent({
      customHeader: <HomeHeader />,
      children: <></>,
    });

    expect(getByTestId('home-header')).toBeTruthy();
  });
});
