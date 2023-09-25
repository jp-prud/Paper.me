import {Text, TouchableOpacityBox} from '@components';

export interface BulletProps {
  content: string;
  isActive?: boolean;
}

export function Bullet({content, isActive = false}: BulletProps) {
  return (
    <TouchableOpacityBox
      backgroundColor={isActive ? 'black900' : 'neutral100'}
      paddingHorizontal="s12"
      paddingVertical="s8"
      borderRadius="s32">
      <Text
        color={isActive ? 'white' : 'neutral600'}
        semiBold
        preset="paragraphSmall">
        {content}
      </Text>
    </TouchableOpacityBox>
  );
}
