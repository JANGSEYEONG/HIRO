'use client';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import SignUpForm from './SignUpForm';
import { useState } from 'react';

interface SignUpDialogProps {
  children: React.ReactNode;
}
const SignUpDialog = ({ children }: SignUpDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild onClick={() => setOpen(true)}>
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>회원가입</AlertDialogTitle>
          <AlertDialogDescription>회원가입 후 HIRO와 함께하세요!</AlertDialogDescription>
        </AlertDialogHeader>
        <SignUpForm onSuccess={() => setOpen(false)} />
        <AlertDialogCancel>취소</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default SignUpDialog;
