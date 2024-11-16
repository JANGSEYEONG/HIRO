import Link from 'next/link';
import { BsFiletypePdf } from 'react-icons/bs';

interface InterviewLinkResumeCardProps {
  resumeId: string;
  fileName: string;
  fileSize: string;
}

const InterviewLinkResumeCard = ({
  resumeId,
  fileName,
  fileSize,
}: InterviewLinkResumeCardProps) => {
  return (
    <Link href={`/interview/${resumeId}`} className="rounded-lg border p-3">
      <div className="flex flex-1 cursor-pointer items-center gap-x-4">
        <BsFiletypePdf className="h-6 w-6" />
        <div className="grid gap-1.5 text-sm">
          <div>{fileName}</div>
          <div className="text-xs text-neutral-400">{fileSize}</div>
        </div>
      </div>
    </Link>
  );
};

export default InterviewLinkResumeCard;
