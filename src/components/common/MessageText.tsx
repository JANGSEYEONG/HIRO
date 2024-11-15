import { cn } from '@/lib/utils';

interface MessageTextProps {
  message: string;
  className?: string;
}

const MessageText = ({ message, className }: MessageTextProps) => {
  return (
    <p
      className={cn(
        'whitespace-pre-wrap text-center text-neutral-500 display5 flex-center',
        className,
      )}>
      {message}
    </p>
  );
};

export default MessageText;
