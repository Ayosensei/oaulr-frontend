// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'OAU Law Reports',
  description: 'Digital repository for OAU Faculty of Law judgments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* CHANGED: Added 'text-base md:text-lg' for larger global text */}
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen text-base md:text-lg leading-relaxed">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}