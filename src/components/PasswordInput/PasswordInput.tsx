import {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput({...passwordInputProps}: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function handleToggleSecureTextEntry() {
    setIsSecureTextEntry(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...passwordInputProps}
      RightComponent={
        <Icon
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={handleToggleSecureTextEntry}
        />
      }
    />
  );
}
