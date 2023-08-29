import {useToast} from '@context';

import {Box} from '../Box/Box';

import {ToastContent} from './components/ToastContent';

export function Toast() {
  const toast = useToast();

  if (!toast) {
    return;
  }

  return (
    <Box position="absolute" flex={1} alignSelf="center">
      <ToastContent toast={toast} />
    </Box>
  );
}
