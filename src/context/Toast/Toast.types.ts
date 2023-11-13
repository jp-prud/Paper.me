export type ToastType = 'success' | 'info';

export type ToastPosition = 'top' | 'bottom';

export interface ToastProps {
  message: string;
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
}

export interface ToastService {
  toast: ToastProps | null;
  showToast: (props: ToastProps) => void;
  hideToast: (props?: HideToastProps) => void;
}

export interface HideToastProps {
  duration?: number;
}
