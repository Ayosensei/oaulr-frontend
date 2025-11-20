// app/login/page.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FadeIn from '../components/FadeIn';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [status, setStatus] = useState({ loading: false, error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '' });

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Login failed');

      // 1. Save user info to LocalStorage (The "Poor man's session")
      localStorage.setItem('oaulr_user', JSON.stringify(data.user));

      // 2. Redirect to Dashboard/Home
      alert(`Welcome back, ${data.user.name}!`);
      router.push('/'); 

    } catch (err: any) {
      setStatus({ loading: false, error: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <FadeIn direction="up" className="max-w-md w-full">
        <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-200">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#002147]">Sign In</h2>
          </div>

          {status.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-4 text-center">
              {status.error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                required 
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                // ADDED: text-gray-900
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                required 
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                // ADDED: text-gray-900
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" 
              />
            </div>

            <button type="submit" disabled={status.loading}
              className="w-full py-3 px-4 font-bold rounded-lg text-white bg-[#002147] hover:bg-[#003366] transition active:scale-95 disabled:opacity-50">
              {status.loading ? 'Checking...' : 'Sign in'}
            </button>
          </form>

          <div className="text-center mt-4">
             <p className="text-sm text-gray-600">
              New here? <Link href="/register" className="text-[#003366] font-bold underline">Create Account</Link>
            </p>
          </div>

        </div>
      </FadeIn>
    </div>
  );
}