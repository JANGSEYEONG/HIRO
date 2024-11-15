import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { RiRobot2Fill } from 'react-icons/ri';
import { TbMessageChatbot } from 'react-icons/tb';
import { Home, LucideLogOut, Search } from 'lucide-react';

import Link from 'next/link';

import { ROUTES } from '@/constant/routes';
import { useLogout } from '../../hooks/useLogout';

const items = [
  {
    title: 'Home',
    url: ROUTES.HOME.PATH,
    icon: Home,
  },
  {
    title: 'Find',
    url: ROUTES.FIND.PATH,
    icon: Search,
  },
  {
    title: 'Interview',
    url: ROUTES.INTERVIEW_INDEX.PATH,
    icon: TbMessageChatbot,
  },
];

export function AppSidebar() {
  const { handleLogout } = useLogout();
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={ROUTES.HOME.PATH}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <RiRobot2Fill className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="body3">HIRO</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Resume</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button onClick={handleLogout}>
                <LucideLogOut />
                <span>Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
