import { cn } from '@/lib/utils';

interface MessageTextProps {
  message: string;
  className?: string;
}

const MessageText = ({ message, className }: MessageTextProps) => {
  return (
    <p
      className={cn(
        'body3-r whitespace-pre-wrap text-center text-neutral-500 flex-center',
        className,
      )}>
      {message}
    </p>
  );
};

export default MessageText;
