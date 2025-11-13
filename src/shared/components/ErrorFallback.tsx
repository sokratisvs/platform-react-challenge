import { useEffect } from 'react';
import { useNotification } from '@/shared/utils/useNotification';

interface ErrorFallbackProps {
  message?: string;
}

export const ErrorFallback = ({
  message = 'Failed to load content.',
}: ErrorFallbackProps) => {
  const { error: notifyError } = useNotification();

  useEffect(() => {
    notifyError(message);
  }, [notifyError, message]);

  return <div className="p-4 text-center text-red-500">{message}</div>;
};
