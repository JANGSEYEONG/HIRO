import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
export default function ChattingInput() {
  return (
    <div className="flex items-center space-x-3 pt-3">
      <Input
        type="text"
        placeholder="Type your message..."
        className="flex-grow rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <Button className="rounded-lg px-4 py-2">Send</Button>
    </div>
  );
}
