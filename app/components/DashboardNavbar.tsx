export default function DashboardNavbar() {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 md:ml-64 sticky top-0 z-20">
            <div className="flex items-center md:hidden">
                <span className="text-xl font-bold text-[#002147]">OAULR</span>
            </div>

            <div className="flex-1 flex justify-end items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#002147] text-white flex items-center justify-center font-bold text-sm">
                        U
                    </div>
                    <span className="text-sm font-medium text-gray-700 hidden sm:block">User</span>
                </div>
            </div>
        </header>
    );
}
