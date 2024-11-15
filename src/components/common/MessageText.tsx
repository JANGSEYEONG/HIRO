import { cn } from '@/lib/utils';

interface MessageTextProps {
  message: string;
  className?: string;
}

const MessageText = ({ message, className }: MessageTextProps) => {
  return (
    <p
      className={cn(
        'flex-center body3-r whitespace-pre-wrap text-center text-neutral-500',
        className,
      )}>
      {message}
    </p>
  );
};

export default MessageText;
