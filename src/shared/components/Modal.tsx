import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export interface ModalProps {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal = ({
  isOpen,
  hasCloseBtn = true,
  onClose,
  children,
}: ModalProps) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <VisuallyHidden.Root>
          <DialogTitle>Modal Title</DialogTitle>
        </VisuallyHidden.Root>
        {hasCloseBtn && <DialogClose onClick={handleClose}></DialogClose>}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
