import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
}

export function ActivityIndicator({
  color = 'primary',
  ...activityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator
      testID="activity-indicator-component"
      color={colors[color]}
      {...activityIndicatorProps}
    />
  );
}
