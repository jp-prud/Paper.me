import {ToastService} from './Toast.types';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService['toast'] {
  const {toast} = useToastContext();

  return toast;
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const {hideToast, showToast} = useToastContext();

  return {
    hideToast,
    showToast,
  };
}
