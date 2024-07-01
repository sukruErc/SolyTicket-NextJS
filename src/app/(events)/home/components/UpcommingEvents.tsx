"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { ImagesData } from "@/app/assets/data/swiperData";
import DateIcon from "@/app/assets/svg/date.svg";
import LocationIcon from "@/app/assets/svg/locationIconWhite.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import viewAllIcon from "@/app/assets/svg/ViewAllIcon.svg";
import { usePathname } from "next/navigation";

import { tr } from "date-fns/locale";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useSwiper } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

interface SwiperEventsProps {
  slidesPerView: number;
  events: Event[];
}

const SwiperEvents: React.FC<SwiperEventsProps> = ({
  slidesPerView,
  events,
}) => {
  const swiper = useSwiper();
  const pathname = usePathname();

  function formatDateToTurkish(dateString: string) {
    const date = new Date(dateString);
    return format(date, "dd MMMM", { locale: tr });
  }

  return (
    <div className="container mx-auto px-5 py-10 sm:py-16 md:py-32 text-white">
      <h6>Eğlenceyi Keşfedin!</h6>
      <h3 className="mb-6">Yaklaşan Etkinlikler</h3>

      <div className="myswiper">
        <Swiper
          className="mb-3"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={slidesPerView}
          navigation
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {events.map((event, index) => {
            return (
              <SwiperSlide key={index}>
                <Link
                  className={`link ${
                    pathname === `/events/${event.id}` ? "active" : ""
                  }`}
                  href={`/events/${event.id}`}
                >
                  <Image
                    alt=""
                    className=" relative block h-[426px] w-full "
                    src={ImagesData[0].src}
                  />

                  <div className="absolute left-11 bottom-11 UpEventContent">
                    <div className="price">
                      <h4>{event.priceLabel}</h4>
                    </div>
                    <div className="title">
                      <h3 className="text-white">{event.eventName}</h3>
                    </div>
                    <div className="flex date_location justify-between w-[110%]">
                      <div className="date">
                        <h4>
                          <Image
                            alt=""
                            className="inline-block mr-2"
                            src={DateIcon}
                          />
                          {formatDateToTurkish(event.date)}
                        </h4>
                      </div>
                      <div className="location">
                        <h4>
                          <Image
                            alt=""
                            className="inline-block mr-2"
                            src={LocationIcon}
                          />
                          {event.location?.name ?? ""}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="text-end">
          <Link
            className={`link ${
              pathname === "/events" ? "active" : ""
            } bg-none text-[#4E43F1] text-[30px] font-medium`}
            href="/events"
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
    </div>
  );
};

export default SwiperEvents;
