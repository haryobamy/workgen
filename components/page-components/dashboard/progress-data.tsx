import { cn } from '@/lib/utils';
import React from 'react';

export default function ProgressData() {
  const totalTarget = 45; // Target in million
  const progressData = [
    { label: 'Won', value: 18, color: 'bg-green-500' },
    { label: 'Committed', value: 8, color: 'bg-blue-400' },
    { label: 'Best case', value: 7, color: 'bg-purple-400' },
    { label: 'Qualified', value: 3, color: 'bg-yellow-400' },
    { label: 'Leads', value: 75, color: 'bg-purple-100' },
  ];

  const totalAchieved = progressData.reduce((acc, data) => acc + data.value, 0);
  const achievedPercentage = Math.min((totalAchieved / totalTarget) * 100, 100);

  return (
    <div className='space-y-2 w-full'>
      {/* Header */}
      <div className='flex items-center justify-between'>
        <div className='text-gray-600 text-xs'>
          <span>1 month until Q4 ends</span>
        </div>
        <div className='flex items-center text-xs text-gray-600 gap-20'>
          <span className='font-[500] mr-2'>
            Target:{' '}
            <span className='font-[700] text-black'>
              ${totalTarget} million{' '}
            </span>
          </span>
          <span>68% of target achieved</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className='relative w-full flex  h-2 bg-gray-100 rounded-full overflow-hidden'>
        {progressData.map((item, index) => (
          <div
            key={index}
            className={cn('h-full', item.color)}
            style={{
              width: `${(item.value / 159) * 100}%`,
              //   width: `${(item.value / totalAchieved) * 100}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Legends */}
      <div className='flex justify-between text-xs text-gray-600 w-2/3'>
        {progressData.map((item, index) => (
          <div key={index} className='flex items-center space-x-1'>
            <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
            <span className='text-xs'>
              {item.label} ${item.value}m
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
