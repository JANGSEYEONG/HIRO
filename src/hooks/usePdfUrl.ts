import { useState } from 'react';

export const usePdfUrl = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [count, setCount] = useState(0);

  const selectPdfUrl = (pdfUrl: string) => {
    setPdfUrl(pdfUrl);
  };
  const setFileCount = (count: number) => {
    setCount(count);
  };
  return {
    pdfUrl,
    selectPdfUrl,
    count,
    setFileCount,
  };
};
