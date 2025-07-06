'use client';

import NavbarPublic from './NavbarPublic';
import NavbarLoggedIn from './NavbarLoggedIn';

// Ganti logic ini dengan real auth (Context, Session, dsb)
const isLoggedIn = true;

export default function Navbar() {
  return isLoggedIn ? <NavbarLoggedIn /> : <NavbarPublic />;
}