import {renderCustomScreenComponent} from '@tests';

import {Text} from '@components';

const componentMessage = 'Screen children component';

function ScreenChildrenComponent() {
  return <Text>{componentMessage}</Text>;
}

describe('<Screen />', () => {
  it('should render correctly component', () => {
    const {getByTestId} = renderCustomScreenComponent({
      children: <></>,
    });

    expect(getByTestId('screen-component')).toBeTruthy();
  });
  it('should render FooterComponent when was passed and isLoading is false', () => {
    const {getByTestId, queryByTestId} = renderCustomScreenComponent({
      isLoading: false,
      children: <></>,
      FooterComponent: <></>,
    });

    expect(getByTestId('footer-component')).toBeTruthy();
    expect(queryByTestId('activity-indicator-component')).not.toBeTruthy();
  });

  it('should render LoadingComponent when isLoading is true and not render children', () => {
    const {getByTestId, queryByText} = renderCustomScreenComponent({
      isLoading: true,
      children: ScreenChildrenComponent(),
    });

    expect(getByTestId('activity-indicator-component')).toBeTruthy();
    expect(queryByText(componentMessage)).not.toBeTruthy();
  });

  it('should render HeaderCustom when was passed and not render default header', () => {
    const customHedaerMessage = 'Custom Header';

    const {queryByText, queryByTestId} = renderCustomScreenComponent({
      customHeader: <Text>{customHedaerMessage}</Text>,
      children: <></>,
    });

    expect(queryByText(customHedaerMessage)).toBeTruthy();
    expect(queryByTestId('screen-header-component')).not.toBeTruthy();
  });

  it('should render children when isLoading is false', () => {
    const {queryByText} = renderCustomScreenComponent({
      children: ScreenChildrenComponent(),
    });

    expect(queryByText(componentMessage)).toBeTruthy();
  });
});
