import {renderHook} from '@tests';
import {useSafeAreaInsets, EdgeInsets} from 'react-native-safe-area-context';

import {theme} from '@theme';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  test('when the safe is less than minimum requirement, it returns the minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 4,
          bottom: 4,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current).toEqual({
      top: theme.spacing.s20,
      bottom: theme.spacing.s20,
    });
  });
  test('when the safe is less than greater requirement, it returns the safe area', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () =>
        ({
          top: 40,
          bottom: 40,
        } as EdgeInsets),
    );

    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current).toEqual({
      top: 40,
      bottom: 40,
    });
  });
});
