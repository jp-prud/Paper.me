import {Dimensions} from 'react-native';

import {ToastPosition, ToastProps} from '@context';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../../Box/Box';
import {Icon} from '../../Icon/Icon';
import {Text} from '../../Text/Text';

const MAX_WIDTH = Dimensions.get('screen').width * 0.9;

interface ToastContentPros {
  toast: ToastProps;
}

export function ToastContent({toast}: ToastContentPros) {
  const position: ToastPosition = toast?.position || 'top';

  return (
    <Box {...$boxStyles} style={[{[position]: 100}, $shadowProps]}>
      <Icon name="share" />
      <Text>{toast?.message}</Text>
    </Box>
  );
}

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
