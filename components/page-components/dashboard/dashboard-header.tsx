import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChartArea,
  ChevronDown,
  Delete,
  MoreHorizontal,
  MoreVertical,
  Plus,
  RefreshCw,
  Trash2,
} from 'lucide-react';
import React from 'react';
import { BsMicrosoftTeams } from 'react-icons/bs';

export default function DashboardHeader() {
  return (
    <section className='bg-white shadow-lg h-12 rounded-sm p-4 flex items-center justify-between'>
      <DropdownMenu>
        <DropdownMenuTrigger className='flex items-center gap-2'>
          My open leads{' '}
          <ChevronDown className='lg:text-xs text-[8px]' size={20} />{' '}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className='flex items-center space-x-1.5 '>
        <div className='flex items-center space-x-5 '>
          <Button className='bg-transparent text-black text-xs  px-0 '>
            <ChartArea />
            Show chart
          </Button>
          <Button className='bg-transparent text-black text-xs  px-0   '>
            <ChartArea />
            Focused view
          </Button>
          <Button className='bg-transparent text-black text-xs  px-0'>
            <Plus className='text-green-500' />
            New
          </Button>
          <Button className='bg-transparent text-black text-xs  px-0'>
            <RefreshCw />
            Refresh
          </Button>
          <Button className='bg-transparent text-black text-xs  px-0'>
            <BsMicrosoftTeams color='#6B4C9A' />
            Collaborate
          </Button>
          <Button className='bg-transparent text-black text-xs  px-0'>
            <Trash2 />
            Delete
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='bg-transparent text-black text-xs  px-0'
          >
            <ChevronDown />
            <MoreVertical />
          </Button>
        </div>
        <Button
          variant='outline'
          className='bg-transparent rounded text-black text-base font-[500] px-2 h-9 '
        >
          <ChartArea />
          Smart Data
        </Button>{' '}
        <Button
          variant='outline'
          className='bg-transparent rounded text-black text-sm font-[500] px-2 h-9 '
        >
          <ChartArea />
          Edit filters
        </Button>
        <Button
          variant='outline'
          className='bg-transparent rounded text-black text-sm font-[500] px-2 h-9 '
        >
          <ChartArea />
          Edit columns
        </Button>
        <Button
          variant='secondary'
          className='bg-blue-800 rounded text-white text-sm font-[500] px-2 h-8 '
        >
          <ChartArea />
          <ChevronDown />
        </Button>
      </div>
    </section>
  );
}
