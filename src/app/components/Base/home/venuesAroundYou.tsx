"use client";
import Image from "next/image";
import React from "react";
import LocalImage from "../../../../public/images/1327499.png";
import Vanue1 from "@/app/assets/images/vanue 1.png";
import Vanue2 from "@/app/assets/images/vanue 2.png";
import Link from "next/link";
import viewAllIcon from "@/app/assets/svg/ViewAllIcon.svg";
import { usePathname } from "next/navigation";

interface VenuesAroundYouProps {
  locations: LocationsForHomepage[];
}

const VenuesAroundYou: React.FC<VenuesAroundYouProps> = ({ locations }) => {
  const pathname = usePathname();
  return (
    <div className="container px-5 mx-auto py-10 sm:py-16 md:py-32 text-[#17161A]">
      <h6>Eğlenceyi Keşfedin!</h6>
      <h3 className="mb-6">Çevrenizdeki Mekanları Keşfedin</h3>

      <div className="Venues">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <Link
            href={`/events?locationId=${locations[0]?.id}`}
            className="col-span-4"
          >
            <div className="relative h-full">
              <Image
                alt=""
                className=" relative block w-full h-full object-cover"
                src={Vanue1}
              />
              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className="text-white">{locations[0]?.locationName}</h3>
                </div>
                <div className="location">
                  <h4 className="font-light">
                    {locations[0]?.locationAddress}
                  </h4>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={`/events?locationId=${locations[0]?.id}`}
            className="col-span-3"
          >
            <div className="relative h-full">
              <Image
                alt=""
                className=" relative block w-full h-full object-cover"
                src={Vanue2}
              />
              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className="text-white">{locations[0]?.locationName}</h3>
                </div>
                <div className="location">
                  <h4>{locations[0]?.locationAddress}</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <Link
            href={`/events?locationId=${locations[0]?.id}`}
            className="col-span-3 order-2 md:order-1"
          >
            <div className="relative h-full">
              <Image
                alt=""
                className=" relative block w-full h-full object-cover"
                src={Vanue2}
              />
              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className="text-white">{locations[0]?.locationName}</h3>
                </div>
                <div className="location">
                  <h4 className="font-light">
                    {locations[0]?.locationAddress}
                  </h4>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={`/events?locationId=${locations[0]?.id}`}
            className="col-span-4 order-1 md:order-2"
          >
            <div className="relative h-full">
              <Image
                alt=""
                className=" relative block w-full h-full object-cover"
                src={Vanue1}
              />
              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className="text-white">{locations[0]?.locationName}</h3>
                </div>
                <div className="location">
                  <h4>{locations[0]?.locationAddress}</h4>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-end mt-4">
        <Link
          className={`link ${
            pathname === "/locations" ? "active" : ""
          } bg-none text-[#4E43F1] text-[30px] font-medium`}
          href="/locations"
        >
          Tümünü Gör{" "}
          <Image
            alt=""
            className="ml-3 inline-block relative top-[-2px]"
            src={viewAllIcon}
          />
        </Link>
      </div>
    </div>
  );
};

export default VenuesAroundYou;
