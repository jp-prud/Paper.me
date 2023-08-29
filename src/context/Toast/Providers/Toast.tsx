import {createContext, useCallback, useState} from 'react';

import {ToastProps, ToastService} from '../Toast.types';

export const ToastContext = createContext<ToastService>({
  toast: null,
  showToast: () => {},
  hideToast: () => {},
});

export function ToastProvider({children}: React.PropsWithChildren<{}>) {
  const [toast, setToast] = useState<ToastService['toast']>(null);

  const showToast = useCallback((_toast: ToastProps) => {
    setToast(_toast);
  }, []);

  const hideToast = useCallback(() => setToast(null), []);

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
