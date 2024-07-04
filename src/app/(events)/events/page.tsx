import React from "react";
import dynamic from "next/dynamic";
import EventCard from "@/app/components/Base/EventCard";
import PageTitle from "@/app/components/Base/PageTitle";
import { EventsApi } from "@/app/api/events";
import Link from "next/link";

// Dynamically import the client-side components
const ClientSideComponents = dynamic(() => import("./EventClient"), {
  ssr: false,
});

const fetchEvents = async (
  categoryId: string | undefined,
  locationId: string | undefined,
  organizerId: string | undefined
): Promise<Event[]> => {
  const eventApi = new EventsApi({});
  const res = await eventApi.getEventsByFilter({
    page: 1,
    size: 20,
    categoryId: categoryId ?? undefined,
    locationId: locationId ?? undefined,
    organizerId: organizerId ?? undefined,
  });

  return res.data || [];
};

const fetchFilters = async (): Promise<EventFilterTypes | undefined> => {
  const eventApi = new EventsApi({});
  const res = await eventApi.getEventFilterTypes();
  if (res.data) return res.data;
  else return;
};

const AllEvents: React.FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const { categoryId, locationId, organizerId } = searchParams;

  const events = await fetchEvents(
    categoryId as string,
    locationId as string,
    organizerId as string
  );

  const filter = await fetchFilters();

  const getTitle = () => {
    if (events.length === 0) {
      return "";
    }
    if (searchParams?.categoryId && events.length > 0) {
      return `${events[0].eventCategory.name} Etkinlikleri`;
    }
    if (searchParams?.locationId && events.length > 0) {
      return `${events[0].location.name}'deki Etkinlikler`;
    }
    if (searchParams?.organizerId && events.length > 0) {
      return `${events[0].creatorId.name} Etkinlikleri`;
    }
    return "";
  };

  const title = getTitle();

  return (
    <>
      <PageTitle title={`${title}`} />
      <div className="container mx-auto px-2 ">
        {filter && <ClientSideComponents events={events} filter={filter} />}
      </div>
    </>
  );
};

export default AllEvents;
