import {useWindowDimensions} from 'react-native';

import {useToast} from '@context';

import {useAppSafeArea} from '@hooks';

import {Box, BoxProps} from '../Box/Box';

import {ToastContent} from './components/ToastContent';

export function Toast() {
  const toast = useToast();

  const {height} = useWindowDimensions();
  const {top} = useAppSafeArea();

  const HEIGHT_TOAST_CONTAINER = height * 0.8 - top;

  const positionContent = toast?.position === 'top' ? 'flex-start' : 'flex-end';

  if (!toast) {
    return;
  }

  return (
    <Box
      height={HEIGHT_TOAST_CONTAINER}
      justifyContent={positionContent}
      {...$boxStyles}>
      <ToastContent toast={toast} />
    </Box>
  );
}

const $boxStyles: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  top: 100,
  bottom: 100,
};
