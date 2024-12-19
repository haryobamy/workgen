'use client';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import ProgressData from './progress-data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Calendar,
  ChevronDown,
  Dot,
  MessageSquare,
  Sparkle,
} from 'lucide-react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { AvatarFallback } from '@radix-ui/react-avatar';
import { If, Then } from 'react-if';
import { useBoolean } from 'usehooks-ts';
import { VscSparkleFilled } from 'react-icons/vsc';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { OfficeIcon } from '@/components/ui/icons';
import EngageModal from './engage-modal';
import { leadsData } from '@/lib/constant';

export default function LeadsCard() {
  const { value: show, toggle } = useBoolean();
  const { value: showEngagement, toggle: toggleEngagment } = useBoolean();
  const [current, setCurrent] = React.useState<number | null>(null);

  //border-indigo-500

  return (
    <section className='mt-5 '>
      <EngageModal
        isOpen={showEngagement}
        onClose={toggleEngagment}
        activeLead={current as number}
      />

      <Card
        className={cn(
          ' shadow-2xl h-full  py-5 pb-0 rounded-2xl  gradient-border border-2 border-solid border-gradient-to-r   border-[#CAD3FD]  '
          //   ' bg-gradient-to-r from-[#E5D4FA] via-[#CAD3FD] to-[#B4EEFA] border-solid border-2'
        )}
      >
        <CardContent className='w-full'>
          <div className='flex items-center w-full space-x-4'>
            <div className='flex items-center space-x-2'>
              <OfficeIcon width={24} height={24} />
              <h1 className='font-bold  '>
                Hi Mona, <span className='text-indigo-600'>68%</span> of goal
                achieved and rest can be achieved by focusing on 20 top leads.
              </h1>
            </div>

            <div className='w-[52%] flex items-center gap-4 '>
              <ProgressData />
              <ChevronDown
                onClick={toggle}
                className='text-sm'
                size={30}
              />{' '}
            </div>
          </div>

          <If condition={show}>
            <Then>
              <div className=' mt-5 p-4 grid lg:grid-cols-[65%_2%_25%] gap-5 '>
                <div className='flex flex-col space-x-2'>
                  <p className='text-gray-400 px-5 py-4 font-[500] text-base'>
                    Copilot has pinpointed 29 key leads that show strong
                    purchase intent an d are actively engaging. These leads need
                    your focus.
                  </p>
                  <div className='flex items-center space-x-2'>
                    {leadsData.engagementData.map((lead, idx) => {
                      return (
                        <Card
                          key={idx}
                          className='shadow-xl rounded-2xl bg-white py-4 pb-1 max-w-[700px] w-[480px]'
                          onClick={() => {
                            toggleEngagment();

                            setCurrent(idx);
                          }}
                        >
                          <CardContent>
                            <div className='flex items-center gap-2 '>
                              <Avatar className='w-10 h-10 relative rounded-full bg-gray-200 flex items-center justify-center'>
                                <AvatarImage src='https://github.com/shadcn.png' />
                                <AvatarFallback>JR</AvatarFallback>
                              </Avatar>

                              <div>
                                <h2 className='font-[600] text-sm '>
                                  {lead.name}
                                </h2>
                                <span className='text-gray-400 flex items-center text-xs'>
                                  {lead.position} <Dot /> {lead.location}
                                </span>
                              </div>
                            </div>
                            <div className='bg-indigo-50 relative mt-4 rounded-[10px] p-3'>
                              <h5 className='flex items-center text-sm  space-x-4 font-[600]'>
                                <Calendar size={18} />
                                {lead.messageTitle}
                              </h5>
                              <span className='text-gray-400 text-sm font-[500] pt-4'>
                                {lead.content}
                              </span>
                              <VscSparkleFilled
                                size={20}
                                className=' w-6 h-6 p-1 absolute -top-1 -right-1 bg-white rounded-[6px] text-indigo-800'
                              />
                            </div>
                            <div>
                              <span className='flex items-center gap-0 text-gray-400 text-sm mt-4'>
                                {lead.tags.map((tag, index) => (
                                  <React.Fragment key={index}>
                                    {tag}
                                    {index < lead.tags.length - 1 && <Dot />}
                                  </React.Fragment>
                                ))}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
                <Separator orientation='vertical' />
                <div className='flex flex-col items-start w-full space-y-2'>
                  <h2 className='text-gray-400 text-start font-[500] text-lg'>
                    Other key activities
                  </h2>
                  {Array(2)
                    .fill('')
                    .map((lead, idx) => {
                      return (
                        <Card
                          key={idx}
                          className='shadow-xl rounded-2xl bg-white py-2 px-0 pb-0  max-w-[500px] w-[420px]'
                        >
                          <CardContent>
                            <div className='flex items-center gap-2'>
                              <Avatar className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center'>
                                <AvatarImage src='https://github.com/shadcn.png' />
                                <AvatarFallback>JR</AvatarFallback>
                              </Avatar>
                              <div className='pt-2'>
                                <h2 className='font-[600] text-sm leading-3  '>
                                  Cafe A100 for Woodland Bank
                                </h2>
                                <span className='text-gray-400 flex items-center text-xs'>
                                  Woodland Bank <Dot /> $280,000 <Dot /> 8 days
                                  to close
                                </span>
                              </div>
                            </div>
                            <div className='flex items-center space-x-2 mt-3 relative bg-indigo-50 p-2 rounded-[5px]'>
                              <MessageSquare className='w-5 h-5' />
                              <span className='font-[600] text-sm text-gray-700'>
                                Review draft and reply to chris Naido
                              </span>
                              <VscSparkleFilled
                                size={20}
                                className=' w-5 h-5 p-1 absolute -top-2 -right-5 bg-white rounded-[6px] text-indigo-800'
                              />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}

                  <div className='w-full flex items-center justify-start '>
                    <Button
                      variant='link'
                      className='text-indigo-600 font-[600] px-0'
                    >
                      Show all key activities
                    </Button>
                  </div>
                </div>
              </div>
            </Then>
          </If>
        </CardContent>
      </Card>
    </section>
  );
}
