'use client';
import * as React from 'react';
import { ChevronDown, LucideIcon, Plus } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { IconType } from 'react-icons/lib';

type Props = {
  items: {
    name: string;
    logo: React.ElementType | LucideIcon | IconType;
    plan: string;
  }[];
};

export default function Recent({ items }: Props) {
  const [activeTeam, setActiveTeam] = React.useState(items[0]);

  return <div>sample</div>;
}
