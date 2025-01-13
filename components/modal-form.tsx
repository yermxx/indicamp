'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function ModalForm({
  children,
  triggerButton,
}: {
  children: React.ReactNode;
  triggerButton: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
        className='overflow-y-auto max-w-[800px] h-[95vh]'
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>
          {children}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
