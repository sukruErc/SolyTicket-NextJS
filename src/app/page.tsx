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

const HomePage: NextPage<HomePageProps> = async () => {
  const homePageValues = await getHomePageValues();
  const categoryItems = await getCategoryItems();
  const locations = await getLocations();

  return (
    <>
      <MainNavbar categoryItems={categoryItems} locations={locations} />
      <HeroSection homePageValues={homePageValues} />
      <UpcommingEvents slidesPerView={1} />
      <Guides />
      <EventCardSwiper />
      <VenuesAroundYou />
      <Footer />
    </>
  );
};

export default HomePage;
