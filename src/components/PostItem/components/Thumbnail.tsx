import {Image} from 'react-native';

import {PostProps} from '@types';

import {Box, RenderIfElse} from '@components';

interface ThumbnailProps {
  thumbnail?: Pick<PostProps, 'thumbnail'>;
}

export function Thumbnail({thumbnail}: ThumbnailProps) {
  return (
    <RenderIfElse
      condition={Boolean(thumbnail)}
      renderIf={
        <Image
          source={{
            uri: thumbnail,
          }}
          width={116}
          height={116}
          borderRadius={16}
          resizeMode="cover"
          resizeMethod="resize"
        />
      }
      renderElse={
        <Box
          width={116}
          height={116}
          backgroundColor="gray1"
          borderRadius="s16"
        />
      }
    />
  );
}
