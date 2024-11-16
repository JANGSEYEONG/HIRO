import { Metadata } from 'next';
import FindWrapper from './_components/FindWrapper';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Find',
  };
}

export default function FindPage() {
  return (
    <div>
      <div className="grid h-[calc(100vh-110px)] grid-cols-2 gap-4 p-4">
        <FindWrapper />
      </div>
    </div>
  );
}
