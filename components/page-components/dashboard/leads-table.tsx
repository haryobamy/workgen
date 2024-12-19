'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  ArrowDown,
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
} from 'lucide-react';
import moment from 'moment';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    date: new Date('4/02/2024 12:00 PM'),
    name: 'Winford asher',
    status: 'success',
    topic: 'Cafe A100 for commercial  use ',
  },
  {
    id: '3u1reuv4',
    date: new Date('3/30/2024 7:45 AM'),
    name: 'josia love ',
    status: 'new',
    topic: 'Upgrading service plan',
  },
  {
    id: 'derv1ws0',
    date: new Date('3/28/2024 3:30 PM'),
    name: 'Harrison curtis ',
    status: 'success',
    topic: 'Issue with throughput on EspressoMaster',
  },
  {
    id: '5kma53ae',
    date: new Date('3/25/2024 11:05 AM'),
    name: 'Jermaine berrett',
    status: 'success',
    topic: 'New roaster in distribution facility',
  },
  {
    id: 'bhqecj4p',
    date: new Date('3/23/2024 4:50 PM'),
    name: 'gerald stephens ',
    status: 'success',
    topic: 'Concerns on current machines',
  },
  {
    id: 'bhqecj2p',
    date: new Date('3/23/2024 4:50 PM'),
    name: 'gerald stephens ',
    status: 'success',
    topic: 'Concerns on current machines',
  },
  {
    id: 'bhqecj9p',
    date: new Date('3/23/2024 4:50 PM'),
    name: 'gerald stephens ',
    status: 'success',
    topic: 'Concerns on current machines',
  },
];

export type Payment = {
  id: string;
  date: Date;
  name: string;
  status: 'new' | 'pending' | 'processing' | 'success' | 'failed';
  topic: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className=' px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ChevronDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='  capitalize text-blue-500'>{row.getValue('name')}</div>
    ),
  },
  {
    accessorKey: 'topic',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className=' px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Topic
          <ChevronDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='text-gray-500'>{row.getValue('topic')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          className=' px-0'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status Reason
          <ChevronDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='  capitalize'>{row.getValue('status')}</div>
    ),
  },
  {
    accessorKey: 'date',
    // header: () => <div className='text-right'>Amount</div>,
    header: ({ column }) => {
      return (
        <div className='text-right'>
          <Button
            variant='ghost'
            className='px-0'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Created on
            <ArrowDown />
            <ChevronDown />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const formatted = moment(row.getValue('date')).format(
        'MM/DD/YYYY h:mm A'
      );

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy Topic
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function LeadsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className='w-full my-10 p-4    rounded-[20px] shadow-2xl'>
      <div className='flex items-center py-4 '>
        <Input
          placeholder='Sort, filter and search with Copilot'
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className='max-w-sm rounded-[5px] border-[#CAD3FD] border-2 focus:outline-none focus-within:outline-none '
        />
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='ml-auto'>
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className='rounded-md '>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className='text-black font-[900] text-base  '
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className='text-left '>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* pagination */}
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
