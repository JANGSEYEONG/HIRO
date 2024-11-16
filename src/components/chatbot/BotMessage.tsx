import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { RiRobot2Fill } from 'react-icons/ri';
interface MsgProps {
  message: string;
}

export default function BotMessage({ message }: MsgProps) {
  return (
    <div className="flex items-start space-x-3 p-1">
      <Avatar>
        <AvatarFallback>
          <RiRobot2Fill className="h-6 w-6 text-gray-600" />
        </AvatarFallback>
      </Avatar>
      <div className="max-w-xs rounded-lg bg-blue-100 p-3 text-gray-800">
        <p>{message}</p>
      </div>
    </div>
  );
}
