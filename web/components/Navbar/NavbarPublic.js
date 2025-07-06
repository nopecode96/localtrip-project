'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NavbarPublic() {
  const { pathname } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/explore' },
    { name: 'Story', href: '/story' },
    { name: 'Become Host', href: '/become-host' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center md:px-8 relative z-50">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Logo" width={120} height={40} className="h-8 w-auto" />
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
        <Link href="/signin" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
          Sign In / Sign Up
        </Link>
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
            <Link href="/signin" onClick={() => setMobileOpen(false)}
              className="bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700">
              Sign In / Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}