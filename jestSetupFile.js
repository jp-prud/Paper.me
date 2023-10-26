import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    useScrollToTop: jest.fn(),
    useNavigation: () => {
      return {
        navigate: mockedNavigate,
        goBack: jest.fn(),
      };
    },
  };
});
