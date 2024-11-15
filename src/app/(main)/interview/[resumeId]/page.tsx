import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Interview',
  };
}

export default async function InterviewPage({ params }: { params: Promise<{ resumeId: string }> }) {
  const resumeId = (await params).resumeId;
  return <div className="p-4">{resumeId} 에 대해 챗봇이랑 대화하기</div>;
}
