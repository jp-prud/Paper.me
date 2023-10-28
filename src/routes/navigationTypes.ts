import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {CategoryProps, PostProps} from '@types';

export type AuthStackParamList = {
  SignInScreen: undefined;
};

export type AppStackParamList = {
  AppTabNavigator: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SearchScreen: undefined;
  FavoriteScreen: undefined;
  FavoriteDetailsListScreen: {
    favoriteListId: string;
  };
  CategoryScreen: {
    categoryId: CategoryProps['id'];
  };
  PostDetailsScreen: {
    postId: PostProps['id'];
  };
  PostCommentScreen: {
    postId: PostProps['id'];
  };
  PreviewPostScreen: undefined;
  CreateContentPostScreen: {
    post: Pick<PostProps, 'title' | 'subtitle' | 'thumbnail' | 'description'>;
  };
};

export type AppTabNavigatorParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  FavoriteScreen: undefined;
  ProfileScreen: undefined;
};

export type AppScreenProps<RouteScreenName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteScreenName>;

export type AuthScreenProps<RouteScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteScreenName>;

export type RootStackParamList = AuthStackParamList & AppStackParamList;

export type AppTabScreenProps<
  RouteName extends keyof AppTabNavigatorParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabNavigatorParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const NAVIGATOR_STACK_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'slide_from_right',
  fullScreenGestureEnabled: true,
  navigationBarHidden: true,
};
