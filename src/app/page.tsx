import React from "react";
import HeroSection from "@/app/(events)/home/components/HeroSection";
import VenuesAroundYou from "@/app/(events)/home/components/venuesAroundYou";
import UpcommingEvents from "@/app/(events)/home/components/UpcommingEvents";
import Guides from "@/app/(events)/home/components/guides";
import Footer from "@/app/components/Base/Footer";
import EventCardSwiper from "./(events)/home/components/EventCardSwiper";
import { GetServerSideProps, NextPage } from "next";
import { HomepageApi } from "./api/homepage";
import MainNavbar from "./components/Base/MainNavbar";

interface HomePageProps {
  homePageValues: HomepageValuesResponse;
  categoryItems: IdNameQuery[];
  locations: IdNameQuery[];
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

const HomePage: NextPage<HomePageProps> = async () => {
  const homePageValues = await getHomePageValues();
  const categoryItems = await getCategoryItems();
  const locations = await getLocations();
  const recentEvents = await getRecentEvents();
  const categoryForGuide = await getCategoryWithCount();
  const locationsForHomepage = await getLocationsForHomepage();

  return (
    <>
      <MainNavbar categoryItems={categoryItems} locations={locations} />
      <HeroSection
        categoryItems={categoryItems}
        locations={locations}
        homePageValues={homePageValues}
      />
      <UpcommingEvents slidesPerView={1} events={recentEvents} />
      <Guides categories={categoryForGuide} />
      <EventCardSwiper events={recentEvents} />
      <VenuesAroundYou locations={locationsForHomepage} />
      <Footer />
    </>
  );
};

export default HomePage;
