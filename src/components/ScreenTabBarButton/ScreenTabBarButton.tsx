import {
  Text,
  Icon,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  IconName,
} from '@components';

export interface ScreenTabBarButtonProps {
  label: string;
  icon: {
    focused: IconName;
    unfocused: IconName;
  };
  focused?: boolean;
}

export function ScreenTabBarButton({
  label: title,
  icon,
  focused,
  ...touchableOpacityBoxProps
}: ScreenTabBarButtonProps & TouchableOpacityBoxProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      gap="s4"
      {...touchableOpacityBoxProps}>
      <Icon
        name={focused ? icon.unfocused : icon.focused}
        color={focused ? 'primary' : 'neutral500'}
      />

      <Text color={focused ? 'primary' : 'neutral500'} semiBold>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
