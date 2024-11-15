'use client';
import { AppSidebar } from '@/components/ui/app-sidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { ROUTES } from '@/constant/routes';
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const currentRoot = '/' + (pathname.split('/')[1] || '');

  let currentRoute = Object.values(ROUTES).find((route) => route.PATH === pathname);
  if (!currentRoute) {
    currentRoute = Object.values(ROUTES).find((route) => route.ROOT === currentRoot);
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="body4">{currentRoute?.TITLE}</h1>
        </header>
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
