import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';

import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FieldType extends FieldValues>({
  name,
  control,
  rules,
  ...passwordInputProps
}: PasswordInputProps & UseControllerProps<FieldType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordInputProps}
        />
      )}
    />
  );
}
