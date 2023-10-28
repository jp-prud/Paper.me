import {Image} from 'react-native';

import {UserProps} from '@types';

import {Box} from '../Box/Box';

export interface AvatarProps {
  size?: number;
  user: Pick<UserProps, 'name' | 'avatar'>;
}

export function Avatar({size = 32, user}: AvatarProps) {
  if (!user) {
    return null;
  }

  const {avatar, name} = user;

  return (
    <Box
      width={size}
      height={size}
      borderRadius="s32"
      backgroundColor="gray1"
      justifyContent="center"
      alignItems="center"
      testID="avatar-component">
      <Box borderRadius="s32" overflow="hidden">
        <Image
          source={{
            uri:
              avatar ||
              'https://pbs.twimg.com/profile_images/1702473435941650433/7G7mQnBt_normal.jpg',
          }}
          alt={name}
          width={size}
          height={size}
        />
      </Box>
    </Box>
  );
}
