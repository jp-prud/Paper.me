import {useContext} from 'react';

import {ToastContext} from './Providers/Toast';

export function useToastContext() {
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }

  return toastContext;
}
