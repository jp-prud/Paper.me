import {Image} from 'react-native';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';

export interface UserProps {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface AvatarProps {
  size?: number;
  user: Pick<UserProps, 'name' | 'avatar'>;
}

export function Avatar({size = 32, user}: AvatarProps) {
  const {avatar, name} = user;

  if (!avatar) {
    return null;
  }

  return (
    <Box
      width={size}
      height={size}
      borderRadius="s32"
      backgroundColor="gray1"
      justifyContent="center"
      alignItems="center"
      testID="Avatar">
      <Box borderRadius="s32" overflow="hidden">
        <Image
          source={{
            uri: avatar,
          }}
          alt={name}
          width={size}
          height={size}
        />
      </Box>
    </Box>
  );
}
