'use client';
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import NavHome from './nav-home';
import { data } from '@/lib/constant';
import MyWorkNav from './my-work-nav';
import NavUser from './nav-user';

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      collapsible='icon'
      className='   shadow-xl pt-14 '
      variant='inset'
    >
      <SidebarTrigger />
      <SidebarHeader />
      <SidebarContent className='bg-yellow w-full ms-0'>
        <NavHome items={data.home} />
        <MyWorkNav title='My Work' works={data.works} />
        <MyWorkNav title='Customers' works={data.customers} />
        <MyWorkNav title='Sales' works={data.sales} />
        <MyWorkNav title='Collateral' works={data.collateral} />
        <MyWorkNav title='Marketing' works={data.marketing} />
        <MyWorkNav title='Performance' works={data.marketing} />
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
