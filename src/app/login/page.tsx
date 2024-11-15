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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button type="button">회원가입</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>회원가입</AlertDialogTitle>
              </AlertDialogHeader>
              <div className="space-y-4 p-4">
                <div>
                  <Label>이름</Label>
                  <Input type="text" placeholder="이름을 입력하세요" />
                </div>
                <div>
                  <Label>아이디</Label>
                  <Input type="text" placeholder="아이디를 입력하세요" />
                </div>
                <div>
                  <Label>비밀번호</Label>
                  <Input type="password" placeholder="비밀번호를 입력하세요" />
                </div>
              </div>
              <AlertDialogFooter>
                <AlertDialogCancel>취소</AlertDialogCancel>
                <AlertDialogAction className="text-white">회원가입</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </Card>
    </div>
  );
}
