import React, { PropsWithChildren } from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/ui/app-sidebar';
import TopHeader from '@/components/ui/header';
import LeftSidebar from '@/components/ui/left-sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col space-y-10'>
      <TopHeader />
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main className='pl-5  pr-[4.5rem] mt-2 py-5'>{children}</main>
        </SidebarInset>
        <LeftSidebar />
      </SidebarProvider>
    </div>
  );
}
