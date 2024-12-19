import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  className?: string;
  backLink?: string;
  onClose?: () => void;
  isOpen: boolean;
}>;

export default function ModalPage({
  children,
  className,
  onClose,
  isOpen,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(className)}>{children}</DialogContent>
    </Dialog>
  );
}
