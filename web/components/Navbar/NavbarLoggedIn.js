'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavbarLoggedIn() {
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Travel Story', href: '/story' },
    { name: 'Become Host', href: '/become-host' },
    { name: 'Promotions', href: '/promos' },
    { name: 'About', href: '/about' },
  ];

  const accountMenu = [
    { name: 'Dashboard', href: '/traveller' },
    { name: 'My Bookings', href: '/traveller/my-bookings' },
    { name: 'Profile Settings', href: '/traveller/profile-settings' },
    { name: 'Become Host', href: '/become-host' },
  ];

  const handleLogout = () => {
    console.log('Logging out...');
    setDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center md:px-8 relative z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={300} height={86} className="h-8 w-auto" />
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}
            className={`hover:text-blue-600 ${
              pathname === item.href ? 'text-blue-600 font-semibold underline' : 'text-gray-600'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
            <Image src="/images/profile1.png" alt="Avatar" width={36} height={36} className="rounded-full border" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border shadow rounded-md">
              {accountMenu.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2 text-sm hover:bg-gray-100">
                  {item.name}
                </Link>
              ))}
              <button onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <button className="md:hidden p-2 border rounded" onClick={() => setMobileOpen(!mobileOpen)}>
        ☰
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t mt-2 py-4 px-4 md:hidden z-40">
          <div className="flex flex-col gap-4 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                className={`hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600 font-semibold' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t pt-2">
              {accountMenu.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block py-1 text-gray-700 hover:text-blue-600">
                  {item.name}
                </Link>
              ))}
              <button onClick={handleLogout}
                className="w-full text-left mt-2 text-red-600 hover:underline">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}