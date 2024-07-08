import React from "react";
import PageTitle from "@/app/components/Base/PageTitle";
import { EventsApi } from "@/app/api/events";
import EventClient from "./EventClient";

const fetchEvents = async (
  filters: GetEventsByFilterRequestModel
): Promise<Event[]> => {
  const eventApi = new EventsApi({});
  const res = await eventApi.getEventsByFilter(filters);

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
  const {
    categoryId,
    cityId,
    organizerId,
    locationId,
    categoryTypeId,
    endDate,
  } = searchParams;
  const selectedFilters: GetEventsByFilterRequestModel = {
    page: 1,
    size: 20,
    locationId: (locationId as string) ?? undefined,
    cityId: (cityId as string) ?? undefined,
    endDate: (endDate as string) ?? undefined,
    categoryTypeId: (categoryTypeId as string) ?? undefined,
    categoryId: (categoryId as string) ?? undefined,
    organizerId: (organizerId as string) ?? undefined,
    sortBy: "date",
    sortOrder: "asc",
  };
  const events = await fetchEvents(selectedFilters);

  const filter = await fetchFilters();

  const getTitle = () => {
    if (events.length === 0) {
      return "Etkinlikler İçin Sayfamızı Takip Edin";
    }
    if (searchParams?.categoryId && events.length > 0) {
      return `${events[0].eventCategory.name} Etkinlikleri`;
    }
    if (searchParams?.cityId && events.length > 0) {
      return `${events[0].location.name}\'deki Etkinlikler`;
    }
    if (searchParams?.organizerId && events.length > 0) {
      return `${events[0].creatorId.name} Etkinlikleri`;
    }
    return "Etkinlikler";
  };

  const title = getTitle();

  return (
    <>
      <PageTitle title={`${title}`} />
      <div className="container mx-auto px-2 ">
        {filter && (
          <EventClient
            events={events}
            filter={filter}
            selectedFilters={selectedFilters}
          />
        )}
      </div>
    </>
  );
};

export default AllEvents;
