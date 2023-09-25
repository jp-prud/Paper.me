import {Dimensions} from 'react-native';

import {ToastProps, ToastType} from '@context';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon, IconProps} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface ToastContentPros {
  toast: ToastProps;
}

export function ToastContent({toast}: ToastContentPros) {
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyles} style={[$shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text>{toast?.message}</Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'success',
  },
  info: {
    color: 'backgroundContrast',
    name: 'message',
  },
};

const $boxStyles: BoxProps = {
  backgroundColor: 'background',
  alignItems: 'center',
  gap: 's8',
  padding: 's16',
  borderRadius: 's16',
  flexDirection: 'row',
  opacity: 0.95,
  width: '100%',
  maxWidth: MAX_WIDTH,
};
