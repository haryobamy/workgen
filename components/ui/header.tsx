import {
  CircleHelp,
  Grip,
  Lightbulb,
  Plus,
  Settings,
  UserPen,
} from 'lucide-react';
import React from 'react';
import { Separator } from './separator';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export default function TopHeader() {
  return (
    <header className='h-14 bg-black text-white fixed top-0 left-0 w-full flex items-center justify-between px-4 z-[999] '>
      <div className='flex items-center space-x-3  '>
        <Grip className='mr-4' />
        <h1 className='font-[500] text-lg'>Dynamics 365 </h1>
        {/* <Separator /> */}
        <hr className='bg-white w-[1px] h-8' />
        <span>Sales hub</span>
      </div>
      <div className='flex items-center space-x-4'>
        <Lightbulb />
        <Plus />
        <Settings />
        <CircleHelp />
        <UserPen />
        <Avatar className='border border-white border-solid'>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
