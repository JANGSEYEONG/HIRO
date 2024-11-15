import { Metadata } from 'next';
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Login',
  };
}
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-center headline4">HIRO</h1>
        <p className="mb-6 text-center display5">
          HR의 Hero, HIRO와 함께 이력서 검토 시간을 줄여보세요!
        </p>

        <div className="mb-4">
          <Label>아이디</Label>
          <Input id="id" type="text" placeholder="아이디를 입력하세요" />
        </div>
        <div className="mb-4">
          <Label>비밀번호</Label>
          <Input id="password" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            type="submit"
            className="bg-white-600 border border-black text-black hover:bg-gray-100">
            로그인
          </Button>
          <Button type="button">회원가입</Button>
        </div>
      </Card>
    </div>
  );
}
