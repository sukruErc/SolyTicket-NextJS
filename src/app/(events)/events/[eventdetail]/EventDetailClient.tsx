"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import OrganizerDetail from "@/app/components/Base/OrganizerDetail";
import { EventsCardData } from "@/app/assets/data/swiperData";
import EventCard from "@/app/components/Base/EventCard";
import CardDateIcon from "@/app/assets/svg/cardDate.svg";
import CardTimeIcon from "@/app/assets/svg/cardTime.svg";
import LocationIcon from "@/app/assets/svg/select_location.svg";
import LocalImage from "@/../../public/images/gon-freecss-from-hunter-1f.jpg";
import { useAppSelector } from "../../../../../redux/app/hooks";
import { userContextRedux } from "../../../../../redux/slices/user-context";
import { EventsApi } from "@/app/api/events";
import { useRouter } from "next/navigation";

interface EventDetailClientProps {
  event: Event;
  similarEvents: Event[];
}

const EventDetailClient = ({
  event,
  similarEvents,
}: EventDetailClientProps) => {
  const userContext = useAppSelector(userContextRedux);
  // const SimilarEvents = EventsCardData.slice(0, 4);
  const router = useRouter();

  useEffect(() => {
    const addViewedEvent = async () => {
      if (userContext && userContext.id && userContext.id !== "") {
        const eventApi = new EventsApi({});
        await eventApi.addViewedEvent(event.id as string, userContext.id);
      }
    };

    // addViewedEvent();
  }, [event.id, userContext]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handlePurchase = () => {
    router.push(`/events/payment/${event.id}`);
  };

  return (
    <div className="container mx-auto px-5">
      <div className="my-16">
        <h2 className="font-bold text-[35px] md:text-[46px] w-full md:w-5/6 lg:w-4/6">
          {event.eventName}
        </h2>
        <div className="flex justify-between text-[15px] md:text-[23px] font-normal my-4">
          <div className="dateTime flex self-center">
            <div className="date">
              <Image height={34} className="mr-1" alt="" src={CardDateIcon} />
              {formatDate(event.date)}
            </div>
            <div className="h-6 w-[0.5px] bg-[#4E43F1] mx-4 opacity-35"></div>
            <div className="time">
              <Image height={34} className="mr-1" alt="" src={CardTimeIcon} />
              {event.time}
            </div>
          </div>
          <div className="location">
            <Image height={34} className="mr-1" alt="" src={LocationIcon} />
            {event.location.name}
          </div>
        </div>
        <div className="my-5">
          <Image src={LocalImage} alt="" />
        </div>
        <div className="flex items-center justify-between my-5">
          <div className="font-semibold text-[36px] text-[#4E43F1]">
            $149 - $300
          </div>
          <button
            onClick={handlePurchase}
            className="BlueButton"
            style={{ marginRight: "10px" }}
          >
            Şimdi Al
          </button>
        </div>
        <div className="my-5">
          <h5 className="font-bold mb-6">{event.eventName}</h5>
          <p className="font-semibold">{event.desc}</p>
        </div>
        <div className="mb-20">
          <h5 className="font-bold mb-6">Organizer</h5>
          <OrganizerDetail
            id={event.creatorId?.id ?? ""}
            organizerName={event.creatorId?.name ?? ""}
            joined={`${formatDate(event.creatorId.createdAt)}'den beri üye`}
            city={event.location.name}
          />
        </div>
        <div>
          <h5 className="font-bold mb-6">Similar Events</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {similarEvents.length > 0 &&
              similarEvents.map((cardData, index) => (
                <EventCard
                  key={index}
                  id={cardData.id}
                  cardImage={cardData.image}
                  eventDateRange={cardData.date}
                  eventTime={cardData.time}
                  eventTitle={cardData.eventName}
                  eventLocation={cardData.location.name}
                  dull={false}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailClient;
