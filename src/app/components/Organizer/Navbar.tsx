"use client";

import { useState, useEffect } from "react";
import NavbarIcon from "../../assets/svg/solyticket_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../../redux/app/hooks";
import { userContextRedux } from "../../../../redux/slices/user-context";
import { withBase } from "@/app/hoc/withBase";
import ThemeToggle from "../Base/ThemeToggle";

interface NavbarProps {
  // categoryItems: IdNameQuery[];
  // locations: IdNameQuery[];
}

const MainNavbar = (props: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const userContext = useAppSelector(userContextRedux);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className=" px-4 shadow-NavShadow">
      <div className="container mx-auto flex h-20 items-center gap-8">
        <Link
          className={`link ${pathname === "/" ? "active" : ""
            } block text-teal-600`}
          href="/"
        >
          <Image src={NavbarIcon} alt="Logo" />
        </Link>

        <div className="flex flex-1 items-center justify-between">
          <div className="sm:flex sm:gap-10">
            <ThemeToggle />
            <Link
              className={`link ${pathname === "/login" ? "active" : ""
                } block rounded-md py-3.5 text-sm font-medium  transition`}
              href="/home"
            >
              Ana Sayfa
            </Link>

            <Link
              className={`link ${pathname === "/login" ? "active" : ""
                } block rounded-md py-3.5 text-sm font-medium  transition`}
              href="/login"
            >
              Etkinliklerim
            </Link>
            <Link
              className={`link ${pathname === "/login" ? "active" : ""
                } block rounded-md py-3.5 text-sm font-medium  transition`}
              href="/login"
            >
              Etkinlik Oluştur
            </Link>
          </div>
          <div className="flex items-center gap-4">


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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>


          {!userContext?.id && (
            <div className="flex flex-col items-center gap-4 p-4">
              <Link
                className={`link ${pathname === "/login" ? "active" : ""
                  } block w-full rounded-md py-3.5 text-center text-sm font-medium text-black transition bg-gray-200`}
                href="/login"
              >
                Sign In
              </Link>
              <Link
                className={`link ${pathname === "/signup" ? "active" : ""
                  } BlueButton block w-full rounded-md text-center text-sm font-medium transition`}
                href="/signup"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default withBase(MainNavbar);
