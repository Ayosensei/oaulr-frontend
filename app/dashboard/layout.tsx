'use client';

import DashboardSidebar from '../components/DashboardSidebar';
import DashboardNavbar from '../components/DashboardNavbar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gray-50">
            <DashboardSidebar />
            <DashboardNavbar />
            <main className="md:ml-64 p-6">
                {children}
            </main>
        </div>
    );
}
