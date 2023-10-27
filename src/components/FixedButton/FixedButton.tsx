import {ViewStyle} from 'react-native';

import {$shadowProps} from '@theme';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Icon, IconName} from '../Icon/Icon';

interface FixedButtonProps {
  onPress: () => void;
  icon: IconName;
}

export function FixedButton({icon, onPress}: FixedButtonProps) {
  return (
    <TouchableOpacityBox
      testID="fixed-button"
      onPress={onPress}
      {...$touchableContainerStyles}
      style={[$shadowProps, $fixedContainerStyle]}>
      <Icon name={icon} color="white" />
    </TouchableOpacityBox>
  );
}

const $touchableContainerStyles: TouchableOpacityBoxProps = {
  backgroundColor: 'primary',
  alignItems: 'center',
  justifyContent: 'center',
  width: 56,
  height: 56,
  borderRadius: 's32',
  borderWidth: 2,
  borderColor: 'teal200',
};

const $fixedContainerStyle: ViewStyle = {
  position: 'absolute',
  right: 24,
  bottom: 24,
};
