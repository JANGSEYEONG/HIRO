import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find',
  };
}

export default function FindPage() {
  return <div className="p-4">이력서 찾기 페이지입니다</div>;
}
