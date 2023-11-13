import {
  ActivityIndicator,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  Text,
  RenderIfElse,
} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset =
  | 'primary'
  | 'secondary'
  | 'positive'
  | 'negative'
  | 'outline';

interface ButtonProps extends TouchableOpacityBoxProps {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  text,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      <RenderIfElse
        condition={Boolean(loading)}
        renderIf={<ActivityIndicator color={buttonPreset.content} />}
        renderElse={
          <Text bold color={buttonPreset.content}>
            {text}
          </Text>
        }
      />
    </TouchableOpacityBox>
  );
}
