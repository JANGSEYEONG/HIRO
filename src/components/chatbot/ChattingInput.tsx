import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/utils';
import type { Resume } from '@/types/resumeType';
import { chatService } from '@/services/chatService';

export interface Chatting {
  isBot: boolean;
  message: string;
  resumes?: Resume[];
}

// Zod schema 정의
const messageSchema = z.object({
  message: z.string().min(1, '메시지를 입력해 주세요.'),
});
type MessageFormData = z.infer<typeof messageSchema>;
interface ChattingInputProps {
  updateChat: (newChat: Chatting) => void;
}

export default function ChattingInput({ updateChat }: ChattingInputProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      message: '',
    },
  });
  const onSubmit = async (data: MessageFormData) => {
    try {
      updateChat({
        isBot: false,
        message: data.message,
      });
      const res = await chatService.getChat(data.message);
      console.log(res);
      updateChat({
        isBot: true,
        message: `${data.message}를 기준으로 이력서를 찾아봤어요!`,
        resumes: res.map((resume, index) => {
          return {
            resumeId: resume.resume_id,
            fileName: `${index + 1}번째 추천 이력서`,
            fileSize: 0,
            applicantName: resume.applicant_name,
            career: 0,
            educationLevel: 0,
            jobCategories: [resume.job_category],
            languages: [resume.language],
            analyzeCompleted: true,
          };
        }),
      });
    } catch (error) {
      updateChat({
        isBot: true,
        message: '다시 한번 입력해 주시겠어요?',
      });
      console.error(error);
    }

    // 폼 리셋
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center space-x-3 pt-3">
      <Input
        {...register('message')}
        type="text"
        placeholder="Type your message..."
        className={cn(
          'flex-grow rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400',
          errors.message && 'border-red-500 focus:ring-red-400',
        )}
      />
      <Button type="submit" className="rounded-lg px-4 py-2">
        Send
      </Button>
    </form>
  );
}
