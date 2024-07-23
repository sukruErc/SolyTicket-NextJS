import { HomepageApi } from "@/app/api/homepage";
import { NextPage } from "next";
import { Suspense, lazy } from "react";
import LogoFiller from "../Spinner/LogoFiller";

const HeroSection = lazy(
  () => import("@/app/components/Base/home/HeroSection")
);
const VenuesAroundYou = lazy(
  () => import("@/app/components/Base/home/venuesAroundYou")
);
const UpcommingEvents = lazy(
  () => import("@/app/components/Base/home/UpcommingEvents")
);
const Guides = lazy(() => import("@/app/components/Base/home/guides"));
const Footer = lazy(() => import("@/app/components/Base/Footer"));
const EventCardSwiper = lazy(
  () => import("@/app/components/Base/home/EventCardSwiper")
);
const MainNavbar = lazy(() => import("../MainNavbar"));

interface HomePageComponentProps {
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
const HomePageComponent: NextPage<HomePageComponentProps> = async (
  props: HomePageComponentProps
) => {
  const overlayStyle = {
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    overflow: "hidden", // Prevent scrolling
  };

  const pageStyle = {
    height: "100vh",
    overflow: "hidden", // Prevent scrolling
  };

  return (
    <Suspense
      fallback={
        // <div style={pageStyle}>
        //   <div style={overlayStyle}>
        //     <LogoFiller />
        //   </div>
        //   <HomePageComponent
        //     categoryItems={props.categoryItems}
        //     locations={props.locations}
        //     homePageValues={props.homePageValues}
        //     recentEvents={props.recentEvents}
        //     categoryForGuide={props.categoryForGuide}
        //     locationsForHomepage={props.locationsForHomepage}
        //   />
        // </div>
        <p>asd</p>
      }
    >
      <MainNavbar
        // categoryItems={props.categoryItems ?? []}
        locations={props.locations ?? []}
      />
      <HeroSection
        categoryItems={props.categoryItems ?? [{ id: "", name: "" }]}
        locations={props.locations ?? []}
        homePageValues={
          props.homePageValues ?? {
            ticketSoldCount: 0,
            totalCustomerCount: 0,
            upcomingEventsCount: 0,
          }
        }
      />
      <UpcommingEvents slidesPerView={1} events={props.recentEvents ?? []} />
      <Guides categories={props.categoryForGuide ?? []} />
      <EventCardSwiper events={props.recentEvents ?? []} />
      <VenuesAroundYou locations={props.locationsForHomepage ?? []} />
      <Footer />
    </Suspense>
  );
};

export default HomePageComponent;
