import React, { useEffect } from "react";

import { usePathname } from "next/navigation";

import CardDateIcon from "@/app/assets/svg/cardDate.svg";
import CardTimeIcon from "@/app/assets/svg/cardTime.svg";
import LocationIcon from "@/app/assets/svg/select_location.svg";
import LocalImage from "@/../../public/images/gon-freecss-from-hunter-1f.jpg";

import Image from "next/image";
import OrganizerDetail from "@/app/components/Base/OrganizerDetail";
import { EventsCardData } from "@/app/assets/data/swiperData";
import EventCard from "@/app/components/Base/EventCard";
import Link from "next/link";
import { EventsApi } from "@/app/api/events";
import { useAppSelector } from "../../../../../redux/app/hooks";
import { userContextRedux } from "../../../../../redux/slices/user-context";
import { ClientStorage } from "@/app/base/storage";
import { ConfigHelper } from "@/app/base/constants";
import EventDetailClient from "./EventDetailClient";

interface EventPageProps {
  params: {
    eventdetail: string;
  };
}

const fetchDetail = async (
  eventId: string | undefined
): Promise<Event | undefined> => {
  console.log("eventId", eventId);
  const eventApi = new EventsApi({});
  const res = await eventApi.getEventById(eventId as string);

  return res.data;
};

const fetchSimilar = async (
  eventId: string | undefined
): Promise<Event[] | undefined> => {
  const eventApi = new EventsApi({});
  const res = await eventApi.getSimilarEvents(eventId as string);

  return res.data;
};

const eventdetail = async ({ params }: EventPageProps) => {
  //   const pathname = usePathname();
  // const userId = ClientStorage.getItem(ConfigHelper.SOLY_USER_ID);
  const event = await fetchDetail(params.eventdetail);
  console.log("event", event);
  const SimilarEvents = await fetchSimilar(params.eventdetail);

  return (
    <>
      {event && (
        <EventDetailClient event={event} similarEvents={SimilarEvents ?? []} />
      )}
    </>
  );
};

export default eventdetail;
