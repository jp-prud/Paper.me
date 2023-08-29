import {CategoryProps, PostProps} from '@domain';
import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  SignInScreen: undefined;
};

export type AppStackParamList = {
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SearchScreen: undefined;
  CategoryScreen: {
    categoryId: CategoryProps['id'];
  };
  PostDetailsScreen: {
    postId: PostProps['id'];
  };
  PostCommentScreen: {
    postId: PostProps['id'];
  };
};

export type AppScreenProps<RouteScreenName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteScreenName>;

export type AuthScreenProps<RouteScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteScreenName>;

export type RootStackParamList = AuthStackParamList & AppStackParamList;

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
