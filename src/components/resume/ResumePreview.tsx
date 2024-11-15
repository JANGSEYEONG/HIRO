import MessageText from '../common/MessageText';

interface ResumePreviewProps {
  pdfUrl: string | null;
}

const ResumePreview = ({ pdfUrl }: ResumePreviewProps) => {
  return (
    <div className="h-full border flex-center">
      {pdfUrl ? (
        <object data={pdfUrl} type="application/pdf" className="h-screen w-full">
          <MessageText message="PDF를 표시할 수 없습니다." />
        </object>
      ) : (
        <MessageText message="미리보기할 이력서를 선택해 주세요." />
      )}
    </div>
  );
};

export default ResumePreview;
