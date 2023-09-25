import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, ScreenTabBarButton} from '@components';
import {useAppSafeArea} from '@hooks';
import {$shadowProps} from '@theme';

import {mappedScreensToProps} from './mappedScreensToProps';
import {AppTabNavigatorParamList} from './navigationTypes';

export function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      flexDirection="row"
      style={[{paddingBottom: bottom}, $shadowProps]}
      pt="s12"
      backgroundColor="background">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItemProps =
          mappedScreensToProps[route.name as keyof AppTabNavigatorParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ScreenTabBarButton
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            flexGrow={1}
            label={tabItemProps.label}
            icon={tabItemProps.icon}
            focused={isFocused}
          />
        );
      })}
    </Box>
  );
}
