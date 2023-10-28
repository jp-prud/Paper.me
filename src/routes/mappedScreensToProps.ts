import {ScreenTabBarButtonProps} from '@components';
import {AppTabNavigatorParamList} from '@routes';

export const mappedScreensToProps: Record<
  keyof AppTabNavigatorParamList,
  ScreenTabBarButtonProps
> = {
  HomeScreen: {
    label: 'Inicío',
    icon: {
      focused: 'home',
      unfocused: 'home',
    },
  },
  SearchScreen: {
    label: 'Busca',
    icon: {
      focused: 'search',
      unfocused: 'search',
    },
  },
  FavoriteScreen: {
    label: 'Favoritos',
    icon: {
      focused: 'favorite',
      unfocused: 'favorite',
    },
  },
  ProfileScreen: {
    label: 'Perfil',
    icon: {
      focused: 'user',
      unfocused: 'user',
    },
  },
};
