import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardSidebar() {
    const pathname = usePathname();

    const links = [
        { name: 'Overview', href: '/dashboard', icon: '📊' },
        { name: 'My Profile', href: '/dashboard/profile', icon: '👤' },
        { name: 'Saved Cases', href: '/dashboard/saved', icon: '🔖' },
        { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 bg-[#002147] text-white min-h-screen fixed left-0 top-0 overflow-y-auto z-10">
            <div className="p-6 border-b border-blue-900">
                <h1 className="text-2xl font-extrabold text-[#d4af37]">OAULR</h1>
                <p className="text-xs text-gray-400 mt-1">User Dashboard</p>
            </div>

            <nav className="flex-1 py-6 px-3 space-y-1">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                    ? 'bg-blue-900 text-white'
                                    : 'text-gray-300 hover:bg-blue-800 hover:text-white'
                                }`}
                        >
                            <span className="mr-3 text-xl">{link.icon}</span>
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-blue-900">
                <Link
                    href="/api/auth/logout" // Assuming a logout route or handle it via onClick
                    className="flex items-center px-4 py-3 text-sm font-medium text-red-300 rounded-lg hover:bg-red-900/20 hover:text-red-200 transition-colors"
                >
                    <span className="mr-3 text-xl">🚪</span>
                    Logout
                </Link>
            </div>
        </aside>
    );
}
