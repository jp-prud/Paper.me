import {differenceInSeconds, format, parseISO} from 'date-fns';

export function formatRelative(dateTime: string): string {
  const date = parseISO(dateTime);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} s`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minuto${diffInMinutes > 1 ? 's' : ''}`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} hora${diffInHours > 1 ? 's' : ''}`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} dia${diffInDays > 1 ? 's' : ''}`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} semana${diffInWeeks > 1 ? 's' : ''}`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} ${diffInMonths > 1 ? 'meses' : 'mês'}`;
  }

  return format(date, 'dd/MM/yyyy');
}
