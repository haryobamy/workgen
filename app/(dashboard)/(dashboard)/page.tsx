import DashboardHeader from '@/components/page-components/dashboard/dashboard-header';
import LeadsCard from '@/components/page-components/dashboard/lead-card';
import LeadsTable from '@/components/page-components/dashboard/leads-table';
import React from 'react';

export default function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <LeadsCard />
      <LeadsTable />
    </div>
  );
}
