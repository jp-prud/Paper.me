import {createContext, useCallback, useState} from 'react';

import {HideToastProps, ToastProps, ToastService} from '../Toast.types';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const initialToastDuration = 2000;

  const showToast = useCallback((_toast: ToastProps) => {
    setToast(_toast);
  }, []);

  const hideToast = useCallback(({duration}: HideToastProps) => {
    setTimeout(() => setToast(null), duration || initialToastDuration);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
}
