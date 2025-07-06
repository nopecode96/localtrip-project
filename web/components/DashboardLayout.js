// components/DashboardLayout.js

import Link from 'next/link';
import { useRouter } from 'next/router';
import { Compass, LogOut, UserPlus, Info, User, LayoutDashboard, Calendar } from 'lucide-react';
import Footer from './Footer';
import { useState } from 'react';

const menuItems = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '/dashboard' },
  { label: 'My Bookings', icon: <Calendar size={18} />, href: '/dashboard/bookings' },
  { label: 'Profile Settings', icon: <User size={18} />, href: '/dashboard/profile' },
  { label: 'Explore', icon: <Compass size={18} />, href: '/explore' }, // NEW
  { label: 'Become Host', icon: <UserPlus size={18} />, href: '/become-host' }, // NEW
  { label: 'About', icon: <Info size={18} />, href: '/about' }, // NEW
  { label: 'Logout', icon: <LogOut size={18} />, href: '/logout' },
];


export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Toggle */}
        <button
          className="md:hidden p-4 absolute top-16 left-4 z-20 bg-white shadow rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰ Menu
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed md:static z-10 top-0 md:top-auto left-0 h-full md:h-auto w-64 bg-white shadow-md p-6 space-y-6 transform transition-transform duration-200 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <h2 className="text-xl font-bold text-primary">Account</h2>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-100 transition ${
                    router.pathname === item.href ? 'bg-gray-200 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </div>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}