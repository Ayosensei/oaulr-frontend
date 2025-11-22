import Skeleton from '../components/Skeleton';
import FadeIn from '../components/FadeIn';

export default function Loading() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Page Header Skeleton */}
                <div className="mb-10">
                    <Skeleton className="h-10 w-64 mb-4" />
                    <Skeleton className="h-6 w-96" />
                </div>

                {/* Search Toolbar Skeleton */}
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-8 flex flex-col md:flex-row gap-4">
                    <Skeleton className="h-12 flex-grow rounded-md" />
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-32 rounded-md" />
                        <Skeleton className="h-12 w-40 rounded-md" />
                        <Skeleton className="h-12 w-24 rounded-md" />
                    </div>
                </div>

                {/* Case List Skeleton */}
                <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="flex-grow pr-4 w-full">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Skeleton className="h-5 w-24 rounded" />
                                    <Skeleton className="h-4 w-12 rounded" />
                                </div>
                                <Skeleton className="h-8 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2 mb-4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-5/6 mt-1" />
                            </div>
                            <div className="mt-4 md:mt-0 min-w-[140px]">
                                <Skeleton className="h-10 w-full rounded" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
