// app/page.tsx

import React from "react";
import { HomepageApi } from "@/app/api/homepage";
import HomePageComponent from "@/app/components/Base/page/HomePage";

interface HomePageProps {
  homePageValues: HomepageValuesResponse;
  categoryItems: IdNameQuery[];
  locations: IdNameQuery[];
  recentEvents: Event[];
  categoryForGuide: CategoryWithCount[];
  locationsForHomepage: LocationsForHomepage[];
}

const getHomePageValues = async (): Promise<HomepageValuesResponse> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getHomePageValues();
    return (
      res.data || {
        ticketSoldCount: 0,
        totalCustomerCount: 0,
        upcomingEventsCount: 0,
      }
    );
  } catch (error) {
    return {
      ticketSoldCount: 0,
      totalCustomerCount: 0,
      upcomingEventsCount: 0,
    };
  }
};

const getRecentEvents = async (): Promise<Event[]> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getRecentEvents();
    return res.data || [];
  } catch (error) {
    return [];
  }
};

const getCategoryWithCount = async (): Promise<CategoryWithCount[]> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getCategoryWithCount();
    return res.data || [];
  } catch (error) {
    return [];
  }
};

const getCategoryItems = async (): Promise<IdNameQuery[]> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getCategoryItems();
    return res.data || [];
  } catch (error) {
    return [];
  }
};

const getLocations = async (): Promise<IdNameQuery[]> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getLocations();
    return res.data || [];
  } catch (error) {
    return [];
  }
};

const getLocationsForHomepage = async (): Promise<LocationsForHomepage[]> => {
  try {
    const homepageApi = new HomepageApi({});
    const res = await homepageApi.getLocationsForHomepage();
    return res.data || [];
  } catch (error) {
    return [];
  }
};

function delay(ms: any) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const HomePage: React.FC = async () => {
  // const homePageValues = await getHomePageValues();
  const categoryItems = await getCategoryItems();
  const locations = await getLocations();
  const recentEvents = await getRecentEvents();
  const categoryForGuide = await getCategoryWithCount();
  const locationsForHomepage = await getLocationsForHomepage();

  return (
    <HomePageComponent
      categoryItems={categoryItems}
      locations={locations}
      // homePageValues={homePageValues}
      recentEvents={recentEvents}
      categoryForGuide={categoryForGuide}
      locationsForHomepage={locationsForHomepage}
    />
  );
};

export default HomePage;
