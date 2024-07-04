"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import SolyDatePicker from "@/app/components/Base/SolyDatepicker";
import "react-datepicker/dist/react-datepicker.css";
import EventCard from "@/app/components/Base/EventCard";
import { EventsApi } from "@/app/api/events";
import { usePrevious } from "@/app/base/hooks/usePrevious";
import GlobalSpinner from "@/app/components/Base/Spinner/GlobalSpinner";

// Dynamically import SolySelect to ensure it's only used on the client side
const SolySelect = dynamic(() => import("@/app/components/Base/SolySelect"), {
  ssr: false,
});

interface EventClientProps {
  filter: EventFilterTypes;
  events: Event[];
}

const EventClient = ({ filter, events: initialEvents }: EventClientProps) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoryTypes, setCategoryTypes] = useState<CategoryType[]>();
  const isFirstLoad = useRef(true);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [selectedCategoryType, setSelectedCategoryType] = useState<string>("");

  const [filters, setFilters] = useState<GetEventsByFilterRequestModel>({
    page: 1,
    size: 20,
    locationId: "",
    endDate: "",
    categoryTypeId: "",
    categoryId: "",
    organizerId: "",
    sortBy: "date",
    sortOrder: "asc",
  });

  const previousFilters = usePrevious(filters);

  const updateURLWithFilters = (filters: GetEventsByFilterRequestModel) => {
    const queryParams = new URLSearchParams();

    if (filters.endDate) queryParams.set("endDate", filters.endDate);
    if (filters.categoryId) queryParams.set("categoryId", filters.categoryId);
    if (filters.categoryTypeId) queryParams.set("categoryTypeId", filters.categoryTypeId);
    if (filters.locationId) queryParams.set("locationId", filters.locationId);
    if (filters.organizerId) queryParams.set("organizerId", filters.organizerId);
    if (filters.sortBy) queryParams.set("sortBy", filters.sortBy);
    if (filters.sortOrder) queryParams.set("sortOrder", filters.sortOrder);

    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    window.history.pushState(null, '', newUrl);
  };

  const fetchEvents = useCallback(
    async (append = false) => {
      const eventApi = new EventsApi({});
      const res = await eventApi.getEventsByFilter({
        page: filters.page,
        size: filters.size,
        locationId: filters.locationId || undefined,
        endDate: filters.endDate || undefined,
        categoryTypeId: filters.categoryTypeId || undefined,
        categoryId: filters.categoryId || undefined,
        organizerId: filters.organizerId || undefined,
        sortBy: "date",
        sortOrder: filters.sortOrder || undefined,
      });
      const newEvents = res.data || [];
      if (append) {
        setEvents((prevEvents) => [...prevEvents, ...newEvents]);
      } else {
        setEvents(newEvents);
      }
      setHasMore(newEvents.length === filters.size);
      setIsFetching(false);
    },
    [filters]
  );

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    if (!isInitialLoad) {
      setIsInitialLoad(true);
      return;
    }
    fetchEvents();
  }, [filters, fetchEvents, isInitialLoad]);

  const handleScroll = useCallback(async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !isFetching &&
      hasMore
    ) {
      setIsFetching(true);
      setFilters((prevFilters) => ({
        ...prevFilters,
        size: prevFilters.size + 20,
      }));
    }
  }, [isFetching, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    const updatedFilters = {
      ...filters,
      endDate: date ? date.toISOString() : "",
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  const handleCategoryChange = (event: string) => {
    setSelectedCategory(event);
    const tempType = filter.categories.find((item) => item.id === event);
    setCategoryTypes(tempType?.CategoryType);
    setSelectedCategoryType("");
    const updatedFilters = {
      ...filters,
      categoryId: event,
      categoryTypeId: "",
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  const handleCategoryTypeClick = (categoryTypeId: string) => {
    setSelectedCategoryType(categoryTypeId);
    const updatedFilters = {
      ...filters,
      categoryTypeId,
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  const handleOrderClick = (sortBy: string) => {
    const updatedFilters = {
      ...filters,
      sortBy,
      sortOrder: filters.sortOrder === "asc" ? "desc" : "asc",
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  const handleLocationClick = (locationId: string) => {
    const updatedFilters = {
      ...filters,
      locationId,
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  const handleOrganizerClick = (organizerId: string) => {
    const updatedFilters = {
      ...filters,
      organizerId,
      page: 1,
    };
    setFilters(updatedFilters);
    updateURLWithFilters(updatedFilters);
  };

  return (
    <>
      <div className="container mx-auto px-2 ">
        <div className="my-10 text-center md:text-start">
          <div className="flex flex-wrap justify-center md:justify-center items-center gap-4">
            {filter?.orderTypes && (
              <SolySelect
                options={filter.orderTypes}
                onClick={handleOrderClick}
                placeholder="Sırala"
              />
            )}
            <div className="relative">
              <SolyDatePicker onDateChange={handleDateChange} />
            </div>
            {filter?.categories && (
              <SolySelect
                options={filter.categories}
                onClick={handleCategoryChange}
                placeholder="Kategori"
              />
            )}
            {filter?.locations && (
              <SolySelect
                options={filter.locations}
                onClick={handleLocationClick}
                placeholder="Mekan"
              />
            )}
            {filter?.organizers && (
              <SolySelect
                options={filter.organizers}
                onClick={handleOrganizerClick}
                placeholder="Organizatör"
              />
            )}
          </div>
          {selectedCategory !== "" && (
            <div className="flex flex-wrap justify-center md:justify-center items-center gap-4 pt-5">
              {categoryTypes?.map((item: CategoryType, index: number) => (
                <div
                  key={index}
                  className={`cursor-pointer flex items-center justify-center px-4 py-2 rounded-lg border-2 transition-all duration-200 
                    ${selectedCategoryType === item.id
                      ? "bg-[#4e43f1] text-white"
                      : "bg-white text-gray-700 hover:border-[#4e43f1]"
                    }`}
                  onClick={() => handleCategoryTypeClick(item.id)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              id={event.id}
              cardImage={event.image}
              eventDateRange={event.date}
              eventTime={event.time}
              eventTitle={event.eventName}
              eventLocation={event.location.name}
              dull={false}
            />
          ))}
        </div>
        {isFetching && (
          <div className="text-center mt-4">
            <GlobalSpinner />
          </div>
        )}
      </div>
    </>
  );
};

export default EventClient;
