import React, { lazy, Suspense } from "react";
// import HeroSection from "@/app/(events)/home/components/HeroSection";
// import VenuesAroundYou from "@/app/(events)/home/components/venuesAroundYou";
// import UpcommingEvents from "@/app/(events)/home/components/UpcommingEvents";
// import Guides from "@/app/(events)/home/components/guides";
// import Footer from "@/app/components/Base/Footer";
// import EventCardSwiper from "./(events)/home/components/EventCardSwiper";
// import MainNavbar from "./components/Base/MainNavbar";
import { GetServerSideProps, NextPage } from "next";
import { HomepageApi } from "./api/homepage";
import GlobalSpinner from "./components/Base/Spinner/GlobalSpinner";
import HomePageComponent from "./components/Base/page/HomePage";

const HeroSection = lazy(() => import("@/app/(events)/home/components/HeroSection"));
const VenuesAroundYou = lazy(() => import("@/app/(events)/home/components/venuesAroundYou"));
const UpcommingEvents = lazy(() => import("@/app/(events)/home/components/UpcommingEvents"));
const Guides = lazy(() => import("@/app/(events)/home/components/guides"));
const Footer = lazy(() => import("@/app/components/Base/Footer"));
const EventCardSwiper = lazy(() => import("./(events)/home/components/EventCardSwiper"));
const MainNavbar = lazy(() => import("./components/Base/MainNavbar"));

interface HomePageProps {
  homePageValues: HomepageValuesResponse;
  categoryItems: IdNameQuery[];
  locations: IdNameQuery[];
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getHomePageValues = async (): Promise<HomepageValuesResponse> => {
  // await delay(1000000);
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
      <HomePageComponent categoryItems={categoryItems} locations={locations}
        homePageValues={homePageValues} recentEvents={recentEvents} categoryForGuide={categoryForGuide}
        locationsForHomepage={locationsForHomepage}
      />

    </>
  );
};

export default HomePage;
