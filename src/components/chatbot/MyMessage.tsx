import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface MyMsgProps {
  message: string;
}

export default function MyMessage({ message }: MyMsgProps) {
  return (
    <div className="flex items-end justify-end space-x-3 p-1">
      <div className="max-w-xs rounded-lg bg-yellow-100 p-3 text-gray-800">
        <p>{message}</p>
      </div>
      <Avatar>
        {/* <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" /> */}
        <AvatarFallback>Me</AvatarFallback>
      </Avatar>
    </div>
  );
}
