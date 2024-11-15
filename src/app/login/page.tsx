import { Metadata } from 'next';
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
  };
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import SignUpDialog from './_components/SignUpDialog';
import LoginForm from './_components/LoginForm';

export default function LoginPage() {
  return (
    <div className="h-screen flex-center">
      <Card className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-center headline4">HIRO</h1>
        <p className="mb-10 text-center display5">
          HR의 Hero, HIRO와 함께 이력서 검토 시간을 줄여보세요!
        </p>
        <LoginForm />
        <SignUpDialog>
          <Button className="mt-3 w-full" variant="outline" size="lg">
            회원가입
          </Button>
        </SignUpDialog>
      </Card>
    </div>
  );
}
