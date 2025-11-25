// app/register/page.tsx
'use client'; // REQUIRED because we use useState

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For redirecting
import FadeIn from '../components/FadeIn';

export default function RegisterPage() {
  const router = useRouter();
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occupation: 'Undergraduate Student (OAU)',
    password: '',
    confirmPassword: ''
  });
  
  const [status, setStatus] = useState({ loading: false, error: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '' });

    if (formData.password !== formData.confirmPassword) {
      setStatus({ loading: false, error: "Passwords do not match" });
      return;
    }

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          occupation: formData.occupation,
          password: formData.password
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Registration failed');

      // Success! Redirect to login
      alert('Account created! Please log in.');
      router.push('/login');

    } catch (err: any) {
      setStatus({ loading: false, error: err.message });
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <FadeIn direction="up" className="max-w-md w-full">
        <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-200">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#002147]">Create Account</h2>
          </div>

          {/* Error Message Display */}
          {status.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-4 text-center">
              {status.error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Inputs... I'll condense the repetition, use the same styles as before */}
            <div>
              <label className="block text-sm font-medium tcreaext-gray-700 mb-1">Full Name</label>
              <input name="name" type="text" required onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input name="email" type="email" required onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" />
            </div>

            {/* Occupation Select */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
              <select name="occupation" onChange={handleChange}
                className="block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147] bg-white">
                <option>Undergraduate Student (OAU)</option>
                <option>Undergraduate Student (Other)</option>
                <option>Law School Student</option>
                <option>Legal Practitioner</option>
                <option>Academic / Researcher</option>
              </select>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input name="password" type="password" required onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input name="confirmPassword" type="password" required onChange={handleChange}
                className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#002147]" />
            </div>

            <button type="submit" disabled={status.loading}
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-[#002147] bg-[#d4af37] hover:bg-[#e6c248] transition active:scale-95 disabled:opacity-50">
              {status.loading ? 'Creating...' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account? <Link href="/login" className="text-[#003366] font-bold underline">Sign in</Link>
            </p>
          </div>

        </div>
      </FadeIn>
    </div>
  );
}