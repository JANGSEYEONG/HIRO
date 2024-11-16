import { formatFileSize } from '@/lib/file';
import Link from 'next/link';
import { BsFiletypePdf } from 'react-icons/bs';

interface InterviewLinkResumeCardProps {
  resumeId: string;
  fileName: string;
  fileSize: number;
}

const InterviewLinkResumeCard = ({
  resumeId,
  fileName,
  fileSize,
}: InterviewLinkResumeCardProps) => {
  return (
    <Link href={`/interview/${resumeId}`} className="overflow-hidden rounded-lg border p-3">
      <div className="flex flex-1 cursor-pointer items-center gap-x-4">
        <BsFiletypePdf className="h-6 w-6" />
        <div className="grid gap-1.5 text-sm">
          <div className="truncate">{fileName}</div>
          <div className="text-xs text-neutral-400">{formatFileSize(fileSize || 0)}</div>
        </div>
      </div>
    </Link>
  );
};

export default InterviewLinkResumeCard;
