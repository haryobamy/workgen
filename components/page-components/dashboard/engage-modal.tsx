import React from 'react';
import ModalPage from './modal-page';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { leadsData } from '@/lib/constant';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Calendar,
  ChevronDown,
  Dot,
  CircleCheck,
  MessageSquare,
  Medal,
  SendHorizontal,
  Pencil,
  Sparkle,
  ChartPie,
  ThumbsDown,
  ThumbsUp,
} from 'lucide-react';
import { VscSparkleFilled } from 'react-icons/vsc';
import { FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import SubnavigationTabs from '@/components/ui/sub-navigation-tabs';
import { Switch, Case } from 'react-if';
import { Separator } from '@/components/ui/separator';
import { FaShieldVirus } from 'react-icons/fa';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  activeLead: number;
};

const PAGES = ['engage', 'research'] as const;
export default function EngageModal({ isOpen, onClose, activeLead }: Props) {
  const [hash, setHash] = React.useState('');
  const lead = React.useMemo(() => {
    return leadsData.engagementData[activeLead];
  }, [activeLead]);

  return (
    <ModalPage
      isOpen={isOpen}
      onClose={onClose}
      className=' bg-transparent border-0 max-w-[1200px] w-[1100px]  h-[850px] '
    >
      <Card
        className={cn(
          ' shadow-2xl h-full  py-8 pb-0 rounded-2xl  !gradient-border border-4 border-solid border-gradient-to-r   border-[#CAD3FD] !bg-slate-50 overflow-y-auto  '
        )}
      >
        <CardContent>
          <div>
            <h1 className='font-[700] text-xl text-black font-sans'>
              {lead?.messageTitle}
            </h1>
          </div>
          <div className='mt-4 shadow-2xl p-3 rounded-[10px] w-full bg-white'>
            <div className='flex items-center gap-2 '>
              <Avatar className='w-10 h-10 relative rounded-full bg-gray-200 flex items-center justify-center'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>JR</AvatarFallback>
              </Avatar>

              <div>
                <h2 className='font-[600] text-sm '>{lead?.name}</h2>
                <span className='text-gray-400 flex items-center text-xs'>
                  <FaLinkedin className='mr-1 w-4 h-4 text-blue-600' />{' '}
                  {lead?.position} <Dot /> {lead?.location}
                </span>
              </div>
            </div>
          </div>

          <div className=' p-6 mt-3 shadow-xl bg-white'>
            <div className='rounded-[20px] bg-[#CAD3FD] py-6 px-3 flex items-center justify-between'>
              <div className='flex items-center space-x-2'>
                <VscSparkleFilled
                  size={20}
                  className=' w-6 h-6 p-1   rounded-[6px] text-indigo-800'
                />
                <h5 className='text-indigo-800'>{lead?.content}</h5>
              </div>

              <div className='flex items-center space-x-2'>
                <Button
                  variant='outline'
                  className='text-indigo-500 px-2 h-7 rounded-[5px] font-[500]'
                >
                  <Pencil />
                  Edit
                </Button>
                <Button className='text-white h-7 rounded-[5px]'>
                  <SendHorizontal />
                  Approve and send
                </Button>
              </div>
            </div>

            <div className='shadow-xl mt-5'>
              <SubnavigationTabs
                hash={hash}
                setHash={setHash}
                tabs={PAGES}
                defaultValue='engage'
              />
            </div>

            <Switch>
              <Case condition={hash === 'research'}>
                <div className='bg-white shadow-2xl p-4 mt-6 rounded-[15px]'>
                  <div className='bg-[#CAD3FD] rounded-[20px] p-5 relative'>
                    <VscSparkleFilled
                      size={20}
                      className=' w-6 h-6 p-1 absolute -top-1 -right-1 bg-white rounded-[6px] text-indigo-800'
                    />
                    <h1 className='text-indigo-400 font-[700] mb-2 text-lg'>
                      Why i picked this lead
                    </h1>

                    <ul className='list-disc pl-5 space-y-2 text-sm'>
                      <li>
                        Jane is a <strong>key decision maker</strong> and was
                        browsing <strong>`espresso machine`</strong> on First
                        Coffee's website.{' '}
                        <sub className='bg-white p-0.5 text-[8px]'>1</sub>
                      </li>
                      <li>
                        Multiple people at her company have report `slowness`
                        during service requests{' '}
                        <sub className='bg-white p-0.5 text-[8px]'>2</sub>
                      </li>

                      <li>
                        Northwind Traders currently see{' '}
                        <strong>$200M in revenue</strong> form their in-store
                        coffee shops.
                        <sub className='bg-white p-0.5 text-[8px]'>1</sub>
                      </li>
                    </ul>

                    <div className='flex items-center space-x-3 mt-5'>
                      <div className='shadow-2xl rounded-[22px] bg-white p-3 w-[250px]  flex items-center gap-1 '>
                        <CircleCheck className='w-14 h-14 text-indigo-500' />
                        <div>
                          <span>Decision maker</span>
                          <h1 className='text-indigo-600 font-bold text-lg'>
                            Yes
                          </h1>
                        </div>
                      </div>

                      <div className='shadow-2xl rounded-[22px] bg-white p-3 w-[250px]  flex items-center gap-1'>
                        <Medal className='w-14 h-14 text-indigo-500' />
                        <div>
                          <span>Potential deal value</span>
                          <h1 className='text-indigo-600 font-bold text-lg'>
                            $1M
                          </h1>
                        </div>
                      </div>

                      <div className='shadow-2xl rounded-[22px] bg-white p-3 w-[250px] flex items-center gap-1'>
                        <CircleCheck className='w-14 h-14 text-indigo-500' />
                        <div>
                          <span>intent</span>
                          <h1 className='text-indigo-600 font-bold text-lg'>
                            High
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='mt-4 flex items-center justify-between'>
                    <div className='flex items-center space-x-1 '>
                      <Button
                        size='icon'
                        variant='outline'
                        className='h-8 rounded bg-gray-100'
                      >
                        <FaShieldVirus />
                      </Button>
                      <Button
                        variant='outline'
                        className='h-8 rounded bg-gray-100'
                      >
                        1
                        <Separator
                          orientation='vertical'
                          className=' bg-gray-500 h-7'
                        />
                        <ChartPie className='mx-1 text-indigo-600' />
                        D365 Sales
                      </Button>
                      <Button
                        size='icon'
                        variant='outline'
                        className='h-8 rounded bg-gray-100 '
                      >
                        +2
                      </Button>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <Button
                        variant='outline'
                        className='h-6 rounded bg-gray-100'
                      >
                        Ai-generated content may be incorrect
                      </Button>
                      <Button
                        size='icon'
                        variant='ghost'
                        className='h-6 rounded px-0'
                      >
                        <ThumbsUp />
                      </Button>
                      <Button
                        size='icon'
                        variant='ghost'
                        className='h-6 rounded px-0 '
                      >
                        <ThumbsDown />
                      </Button>
                    </div>
                  </div>
                </div>
              </Case>
            </Switch>

            <div className='shadow-xl bg-white p-5 rounded-[20px] mt-5'>
              <div className='flex items-center justify-between mb-3'>
                <h1 className='text-base font-[600]'>About Jane</h1>

                <ChevronDown />
              </div>

              <p className='text-sm text-gray-600'>
                Jane Reyees , the Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Laudantium vero placeat numquam, alias
                architecto pariatur consequatur saepe. Laudantium, nesciunt
                officia! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Nemo commodi excepturi hic aliquam beatae quasi corporis
                asperiores. Corporis, quis illum.
              </p>
            </div>
          </div>

          <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center space-x-2'>
              <span className='text-sm text-gray-600'>Showing 1 of 2</span>
              <Separator orientation='vertical' className=' bg-gray-500 h-7' />

              <Button variant='ghost' className='text-indigo-700 font-[600]'>
                Show all
              </Button>
            </div>
            <div></div>

            <div className='flex items-center'>
              <Button size='icon' variant='ghost' className='h-6 rounded px-0'>
                <ThumbsUp />
              </Button>
              <Button size='icon' variant='ghost' className='h-6 rounded px-0 '>
                <ThumbsDown />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ModalPage>
  );
}
