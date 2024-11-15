import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interview',
  };
}

export default function InterviewPage({ params: { resumeId } }: { params: { resumeId: string } }) {
  return <div className="pt-[35px]">{resumeId} 에 대해 챗봇이랑 대화하기</div>;
}
