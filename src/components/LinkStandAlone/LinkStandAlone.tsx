import {Text, Icon, TouchableOpacityBox} from '@components';

export interface LinkStandAloneProps {
  text: string;
  onPress?: () => void;
  hasIcon?: boolean;
}

export function LinkStandAlone({
  onPress,
  text,
  hasIcon = true,
}: LinkStandAloneProps) {
  return (
    <TouchableOpacityBox
      onPress={onPress}
      flexDirection="row"
      alignItems="center"
      gap="s4">
      <Text semiBold color="teal600">
        {text}
      </Text>

      {hasIcon && <Icon name="chevron" />}
    </TouchableOpacityBox>
  );
}
