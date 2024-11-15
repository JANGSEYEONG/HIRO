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

interface SignUpDialogProps {
  children: React.ReactNode;
}
const SignUpDialog = ({ children }: SignUpDialogProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>회원가입</AlertDialogTitle>
          <AlertDialogDescription>회원가입 후 HIRO와 함께하세요!</AlertDialogDescription>
        </AlertDialogHeader>
        <SignUpForm />
        <AlertDialogCancel>취소</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default SignUpDialog;
