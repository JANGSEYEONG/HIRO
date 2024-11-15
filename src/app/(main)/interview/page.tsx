import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interview',
  };
}

export default function InterviewIndexPage() {
  return <div>면접질문 뽑아내는 페이지, 여기서 이력서 선택하게 함</div>;
}
