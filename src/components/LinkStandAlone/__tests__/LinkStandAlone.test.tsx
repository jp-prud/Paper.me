import {fireEvent, render} from '@tests';

import {LinkStandAlone} from '../LinkStandAlone';

describe('<LinkSantAlone />', () => {
  it('should render', () => {
    const {getByTestId} = render(
      <LinkStandAlone text="Ver mais" onPress={() => {}} />,
    );

    expect(getByTestId('link-stand-alone')).toBeTruthy();
  });

  it('should render with icon', () => {
    const {getByTestId} = render(
      <LinkStandAlone text="Ver mais" onPress={() => {}} hasIcon />,
    );

    expect(getByTestId('link-stand-alone-icon')).toBeTruthy();
  });

  it.skip('should call function when press', () => {
    const onPressFn = jest.fn();

    const {getByTestId} = render(
      <LinkStandAlone text="Ver mais" onPress={onPressFn} hasIcon />,
    );

    fireEvent.press(getByTestId('link-stand-alone'));

    // expect(event).toHaveBeenCalledTimes(1);
  });
});
