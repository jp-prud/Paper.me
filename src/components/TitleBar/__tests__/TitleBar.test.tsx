import {render} from '@tests';

import {TitleBar} from '../TitleBar';

describe('<TitleBar />', () => {
  it('should render when data has passed', () => {
    const {getByTestId} = render(<TitleBar title="Title Bar" />);

    expect(getByTestId('title-bar')).toBeTruthy();
  });

  it("should render LinkStandAlone when 'linkText' is passed", () => {
    const {getByTestId, getByText} = render(
      <TitleBar title="Title Bar" linkText="Link" />,
    );

    expect(getByTestId('link-stand-alone')).toBeTruthy();
    expect(getByText('Link')).toBeTruthy();
  });
});
