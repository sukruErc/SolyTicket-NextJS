"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import PageTitle from "@/app/components/Base/PageTitle";
import { EventsCardData, CollectionData } from "@/app/assets/data/swiperData";
import React from "react";
import EventCard from "@/app/components/Base/EventCard";

const Collections = () => {
  const pathname = usePathname();
  return (
    <>
      <PageTitle title="Collection Page" />
      <div className="container mx-auto px-2 text-[#17161A] mt-10">
        <div className="mb-10">
          <div className="mb-4">
            <h5>April Collections</h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CollectionData.map((cardData, index) => {
              const isDull = index !== 0;
              return (
                <Link
                  className={`link ${
                    pathname === "/category/eventdetail" ? "active" : ""
                  }`}
                  href="/category/eventdetail"
                  key={index}
                >
                  <EventCard
                    cardImage={cardData.src}
                    eventDateRange={cardData.date}
                    eventTime={cardData.time}
                    eventTitle={cardData.title}
                    eventLocation={cardData.location}
                    id={""}
                    dull={false}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mb-10">
          <div className="mb-4">
            <h5>May Collections</h5>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {CollectionData.map((cardData, index) => {
              const isDull = index !== 0;
              console.log(isDull);
              return (
                <Link
                  className={`link ${
                    pathname === "/category/eventdetail" ? "active" : ""
                  }`}
                  href="/category/eventdetail"
                  key={index}
                >
                  <EventCard
                    cardImage={cardData.src}
                    eventDateRange={cardData.date}
                    eventTime={cardData.time}
                    eventTitle={cardData.title}
                    eventLocation={cardData.location}
                    dull={false}
                    id={""}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collections;
