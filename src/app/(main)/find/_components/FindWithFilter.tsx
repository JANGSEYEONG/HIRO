import { TabsContent } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

import ResumeFilter from './ResumeFilter';
import ResumeList from './ResumeList';
import { Label } from '@/components/ui/label';

interface FindWithFilterProps {
  selectResume: (resumeId: string) => void;
}
const FindWithFilter = ({ selectResume }: FindWithFilterProps) => {
  return (
    <TabsContent value="2" className="h-[calc(100vh-130px)] w-full border p-4">
      <Label className="mb-2">업로드 된 이력서를 바탕으로 추출된 필터입니다.</Label>
      <ResumeFilter />
      <div className="mb-3 mt-3 h-[calc(100vh-240px)]">
        <ScrollArea className="h-full p-3 pr-2">
          <ResumeList selectResume={selectResume} />
        </ScrollArea>
      </div>
    </TabsContent>
  );
};
export default FindWithFilter;
