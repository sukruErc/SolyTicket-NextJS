"use client";
import { useState } from 'react';
import NavbarIcon from "../../assets/svg/solyticket_logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

export function MainNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div className="bg-white px-4 shadow-NavShadow">
      <div className="container mx-auto flex h-20 items-center gap-8">
        <Link className={`link ${pathname === '/' ? 'active' : ''} block text-teal-600`} href="/">
        <Image src={NavbarIcon} alt="Logo" />
        </Link>
       

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
              <select className=' navbarSelects font-bold border-none'  name="cars" id="cars">

                <option selected disabled value="volvo">Select City</option>
                
                <option value="volvo">France</option>
                <option value="saab">Italy</option>
                <option value="mercedes">London</option>
                <option value="audi">Austria</option>
              </select>
              </li>

              <li>
                <select className='navbarSelects font-bold border-none' name="cars" id="cars">
                  <option selected disabled value="volvo">Categories</option>
                  <option value="volvo">Party</option>
                  <option value="saab">Educational</option>
                </select>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
            <Link className={`link ${pathname === '/login' ? 'active' : ''} block rounded-md py-3.5 text-sm font-medium text-black transition`} href="/login">Sign In</Link>
            <Link className={`link ${pathname === '/signup' ? 'active' : ''} BlueButton hidden rounded-md text-sm font-medium transition sm:block`} href="/signup">Sign Up</Link>
            </div>

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleMenu}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="max-h-max fixed inset-0 z-50 flex flex-col bg-white shadow-lg md:hidden">
          <div className="flex justify-between items-center p-4">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image src={NavbarIcon} alt="Logo" />
            </a>
            <button
              className="rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav aria-label="Global" className="flex-1 mt-4">
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li>
                <a className="text-[#17161A] font-semibold transition hover:text-[#17161A]/75" href="#"> Select City </a>
              </li>

              <li>
                <a className="text-[#17161A] font-semibold transition hover:text-[#17161A]/75" href="#"> Categories </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 p-4">
          <Link className={`link ${pathname === '/login' ? 'active' : ''} block w-full rounded-md py-3.5 text-center text-sm font-medium text-black transition bg-gray-200`} href="/login">Sign In</Link>
          <Link className={`link ${pathname === '/signup' ? 'active' : ''} BlueButton block w-full rounded-md text-center text-sm font-medium transition`} href="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </div>
  );
}