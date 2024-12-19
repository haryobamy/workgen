import {
  Clock3,
  Frame,
  Home,
  Map,
  PieChart,
  Receipt,
  User,
} from 'lucide-react';
import { BsPinAngle } from 'react-icons/bs';

export const data = {
  user: {
    name: 'Sales',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  home: [
    {
      title: 'Home',
      url: '#',
      icon: Home,
      isActive: true,
    },
    {
      title: 'Recent',
      url: '#',
      icon: Clock3,
      isActive: false,
      children: [
        {
          title: 'Recent Docs',
          url: '#',
        },
        {
          title: 'Recent Route',
          url: '#',
        },
        {
          title: 'Recent folder',
          url: '#',
        },
      ],
    },
    {
      title: 'Pinned',
      url: '#',
      icon: BsPinAngle,
      isActive: false,
      children: [
        {
          title: 'Pinned Docs',
          url: '#',
        },
        {
          title: 'Pinned Route',
          url: '#',
        },
        {
          title: 'Pinned folder',
          url: '#',
        },
      ],
    },
  ],

  works: [
    {
      name: 'Sale accelerattor',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Dashboards',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Activities',
      url: '#',
      icon: Map,
    },
  ],

  customers: [
    {
      name: 'Accounts',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Contact',
      url: '#',
      icon: User,
    },
  ],
  sales: [
    {
      name: 'Leads',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Opportuntties',
      url: '#',
      icon: User,
    },
    {
      name: 'Competitors',
      url: '#',
      icon: User,
    },
  ],

  collateral: [
    {
      name: 'Quotes',
      url: '#',
      icon: Receipt,
    },
    {
      name: 'Orders',
      url: '#',
      icon: Receipt,
    },
    {
      name: 'Invoices',
      url: '#',
      icon: Receipt,
    },
    {
      name: 'Products',
      url: '#',
      icon: Receipt,
    },
    {
      name: 'Sale Literatures',
      url: '#',
      icon: Receipt,
    },
  ],
  marketing: [
    {
      name: 'Marketing lists',
      url: '#',
      icon: Receipt,
    },
    {
      name: 'Quick Campaigns',
      url: '#',
      icon: Receipt,
    },
  ],
};

export const leadsData = {
  engagementData: [
    {
      name: 'Jane Reyes',
      position: 'COO',
      location: 'Northwind Traders',
      messageTitle: 'Engage with Jane Reyes',
      content:
        ' Jane may be intrested in upgrading espresso machines for her in-store coffee shops.',
      tags: ['Expand business', 'High buyig intent'],
    },
    {
      name: 'Allan Munger',
      position: 'Head of Real Estate Developement',
      location: 'Contoso Coffee',
      messageTitle: 'Prepare for meeting with Allan',
      content:
        'Prepare for high-buying intent meeting Copilot schedules for 2 PM regarding upgrading service contract',
      tags: ['Upcoming meeting', 'Due today'],
    },
  ],
};
