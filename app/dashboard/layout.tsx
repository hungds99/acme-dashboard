import SideNav from '@/app/ui/dashboard/sidenav';
import { Suspense } from 'react';
import LatestInvoices from '../ui/dashboard/latest-invoices';
import RevenueChart from '../ui/dashboard/revenue-chart';
import { LatestInvoicesSkeleton } from '../ui/skeletons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      {/* <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div> */}
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <RevenueChart />
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <LatestInvoices />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
