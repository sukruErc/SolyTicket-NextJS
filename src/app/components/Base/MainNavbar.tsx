"use client";

import { useState, useEffect } from "react";
import NavbarIcon from "../../assets/svg/solyticket_logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppSelector } from "../../../../redux/app/hooks";
import { userContextRedux } from "../../../../redux/slices/user-context";
import { withBase } from "@/app/hoc/withBase";
import SearchableSelect from "./SearchableSelect";
import SearchBar from "./Searchbar";
import ThemeToggle from "./ThemeToggle";

interface MainNavbarProps {
  // categoryItems: IdNameQuery[];
  locations: IdNameQuery[];
}

const MainNavbar = (props: MainNavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [categoryId, setCategoryId] = useState(
    searchParams.get("categoryId") || ""
  );
  const [locationId, setLocationId] = useState(
    searchParams.get("cityId") || ""
  );

  const locationOptions =
    (props.locations?.length > 0 &&
      props.locations?.map((item: IdNameQuery) => ({
        value: item.id,
        label: item.name,
      }))) ||
    [];

  // const categoryOptions =
  //   (props.categoryItems.length > 0 &&
  //     props.categoryItems?.map((item: IdNameQuery) => ({
  //       value: item.id,
  //       label: item.name,
  //     }))) ||
  //   [];

  const userContext = useAppSelector(userContextRedux);

  useEffect(() => {
    const category = searchParams.get("categoryId");
    const location = searchParams.get("cityId");
    if (category) setCategoryId(category);
    if (location) setLocationId(location);
  }, [searchParams]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLocationSelect = (id: string | null, name: string | null) => {
    if (id && name) {
      setLocationId(id);
      const params = new URLSearchParams();
      if (categoryId) params.append("categoryId", categoryId);
      if (id) params.append("cityId", id);
      const url = params.toString();
      router.push(`/events?${url}`);
    } else {
      setLocationId("");
      const params = new URLSearchParams();
      if (categoryId) params.append("categoryId", categoryId);
      const url = params.toString();
      router.push(`/events?${url}`);
    }
  };

  const handleCategorySelect = (id: string | null, name: string | null) => {
    if (id && name) {
      setCategoryId(id);
      const params = new URLSearchParams();
      if (locationId) params.append("cityId", locationId);
      if (id) params.append("categoryId", id);
      const url = params.toString();
      router.push(`/events?${url}`);
    } else {
      setCategoryId("");
      const params = new URLSearchParams();
      if (locationId) params.append("cityId", locationId);
      const url = params.toString();
      router.push(`/events?${url}`);
    }
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
          <div className="flex items-center gap-6">
            {locationOptions.length > 0 && (
              <SearchableSelect
                options={locationOptions}
                name="locations"
                placeholder="Konum Seçiniz"
                onOptionSelect={handleLocationSelect}
                selectedValue={locationId} // Display selected location
                instanceId="location-select" // Add instanceId for consistent ID generation
              />
            )}
            <ThemeToggle />
          </div>

          <div className="w-2/6">
            <SearchBar placeholder="Etkinlik, Sanatçı, Mekan Arayın..." />
          </div>

          <div className="flex items-center gap-4">
            {!userContext?.id ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className={`link ${pathname === "/login" ? "active" : ""
                    } block rounded-md py-3.5 text-sm font-medium  transition`}
                  href="/login"
                >
                  Giriş Yap
                </Link>
                <Link
                  className={`link ${pathname === "/signup" ? "active" : ""
                    } BlueButton hidden rounded-md text-sm font-medium transition sm:block`}
                  href="/signup"
                >
                  Üye Ol
                </Link>
              </div>
            ) : (
              <div className="relative">
                <button
                  className="flex items-center gap-2 rounded-md bg-gray-100 p-2 text-sm font-medium text-gray-600 hover:bg-gray-200 border border-gray-300"
                  onClick={toggleDropdown}
                >
                  {userContext.username}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md bg-white shadow-lg border border-gray-300">
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/profile"
                    >
                      Profil
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/collections"
                    >
                      Siparişlerim
                    </Link>
                    <Link
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      href="/collections"
                    >
                      Koleksiyonlarım
                    </Link>
                  </div>
                )}
              </div>
            )}

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

          <nav aria-label="Global" className="flex-1 mt-4">
            <ul className="flex flex-col items-center gap-6 text-lg">
              <li>
                <a
                  className="text-[#17161A] font-semibold transition hover:text-[#17161A]/75"
                  href="#"
                >
                  Select City
                </a>
              </li>
              <li>
                <a
                  className="text-[#17161A] font-semibold transition hover:text-[#17161A]/75"
                  href="#"
                >
                  Categories
                </a>
              </li>
            </ul>
          </nav>

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
