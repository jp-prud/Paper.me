import {Text, Icon, TouchableOpacityBox, Box} from '@components';

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
      gap="s4"
      testID="link-stand-alone">
      <Text semiBold color="teal600">
        {text}
      </Text>

      {hasIcon && (
        <Box testID="link-stand-alone-icon">
          <Icon name="chevron" />
        </Box>
      )}
    </TouchableOpacityBox>
  );
}
