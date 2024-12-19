import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarTrigger,
} from './sidebar';
import { MessageSquare, Phone, RefreshCcw } from 'lucide-react';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';
import { OfficeIconOutline } from './icons';

export default function LeftSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      {...props}
      side='right'
      collapsible='none'
      //collapsible='icon'
      className=' w-16  shadow-xl pt-5 mt-14 fixed hidden lg:flex top-0 right-0 h-svh  '
      variant='inset'
    >
      {/* <SidebarTrigger /> */}
      {/* <SidebarHeader /> */}
      <div className='flex items-center w-full  justify-center mb-5'>
        <OfficeIconOutline width={24} height={24} />
      </div>

      <SidebarContent className=' flex items-center space-y-4'>
        <HiOutlineChatBubbleLeftRight size={26} />
        <Phone />
        <MessageSquare />
      </SidebarContent>
    </Sidebar>
  );
}
