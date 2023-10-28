import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  SearchScreen,
  ProfileScreen,
  FavoriteScreen,
} from '@screens';

import {AppTabNavigatorParamList} from './navigationTypes';
import {TabBar} from './TabBar';

const {Navigator, Screen} =
  createBottomTabNavigator<AppTabNavigatorParamList>();

export function TabNavigationStack() {
  const TAB_NAVIGATOR_SCREEN_OPTIONS: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
  };

  function renderTabBar(props: BottomTabBarProps) {
    return <TabBar {...props} />;
  }

  return (
    <Navigator
      screenOptions={TAB_NAVIGATOR_SCREEN_OPTIONS}
      tabBar={renderTabBar}
      initialRouteName="FavoriteScreen">
      <Screen name="HomeScreen" component={HomeScreen} />

      <Screen name="SearchScreen" component={SearchScreen} />

      <Screen name="FavoriteScreen" component={FavoriteScreen} />

      <Screen name="ProfileScreen" component={ProfileScreen} />
    </Navigator>
  );
}
