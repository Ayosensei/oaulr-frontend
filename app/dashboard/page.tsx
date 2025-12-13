'use client';

import FadeIn from '../components/FadeIn';

export default function DashboardPage() {
    return (
        <div>
            <FadeIn direction="up">
                <h1 className="text-3xl font-bold text-[#002147] mb-2">Dashboard</h1>
                <p className="text-gray-600 mb-8">Welcome back to your OAULR dashboard.</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { title: 'Saved Cases', value: '0', icon: '🔖', color: 'bg-blue-50 text-blue-600' },
                    { title: 'Recent Searches', value: '0', icon: '🔍', color: 'bg-purple-50 text-purple-600' },
                    { title: 'Downloads', value: '0', icon: '⬇️', color: 'bg-green-50 text-green-600' },
                ].map((stat, index) => (
                    <FadeIn key={index} delay={index * 0.1} direction="up">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4 ${stat.color}`}>
                                {stat.icon}
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn direction="up" delay={0.3}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <h2 className="text-xl font-bold text-[#002147] mb-4">Recent Activity</h2>
                    <div className="text-center py-12 text-gray-500">
                        <p>No recent activity found.</p>
                        <button className="mt-4 px-4 py-2 bg-[#002147] text-white rounded-lg text-sm font-medium hover:bg-[#003366] transition">
                            Browse Cases
                        </button>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
