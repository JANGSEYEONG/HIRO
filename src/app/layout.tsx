import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

import { Toaster } from '@/components/ui/toaster';
import TanstackQueryProvider from '@/components/provider/TanstackQueryProvider';

const pretendard = localFont({
  src: '../../public/assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard-variable',
});

export const metadata: Metadata = {
  title: {
    template: '%s | HIRO',
    default: 'HIRO', // 페이지 타이틀이 없을 때 사용될 기본값
  },
  description: 'HR의 Hero, HIRO와 함께 이력서 검토 시간을 줄여보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className={pretendard.variable}>
        <TanstackQueryProvider>
          {children}
          <Toaster />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
