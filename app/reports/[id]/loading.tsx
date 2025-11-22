import Skeleton from '../../components/Skeleton';

export default function Loading() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb Skeleton */}
                <Skeleton className="h-6 w-64 mb-8" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">

                    {/* MAIN CONTENT */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Header Card */}
                        <div className="bg-white p-10 rounded-xl shadow-sm border-t-4 border-gray-200">
                            <div className="flex justify-between items-start mb-4">
                                <Skeleton className="h-5 w-48" />
                                <Skeleton className="h-6 w-32 rounded" />
                            </div>
                            <Skeleton className="h-10 w-full mb-3" />
                            <Skeleton className="h-10 w-2/3 mb-8" />
                            <Skeleton className="h-6 w-40 mb-8" />
                            <div className="p-6 border-l-4 border-gray-200">
                                <Skeleton className="h-24 w-full" />
                            </div>
                        </div>

                        {/* Content Sections */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-gray-200">
                                <Skeleton className="h-6 w-40 mb-6" />
                                <Skeleton className="h-4 w-full mb-3" />
                                <Skeleton className="h-4 w-full mb-3" />
                                <Skeleton className="h-4 w-5/6" />
                            </div>
                        ))}
                    </div>

                    {/* SIDEBAR */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <Skeleton className="h-6 w-32 mb-4" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-full mb-2" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                            <Skeleton className="h-6 w-32 mb-4" />
                            <Skeleton className="h-10 w-full mb-2" />
                            <Skeleton className="h-10 w-full" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
