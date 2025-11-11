import { toast } from 'sonner';

export interface NotificationProps {
  type: 'info' | 'error';
  description: string;
}

const Notification = ({ type, description }: NotificationProps) => {
  const title = type === 'info' ? 'Information' : ' An Error occured';

  return toast(`${title}`, {
    description,
    action: {
      label: 'Close',
      onClick: () => {},
    },
  });
};

export default Notification;
