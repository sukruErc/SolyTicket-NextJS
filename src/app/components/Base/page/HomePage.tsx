import { NextPage } from "next";
import { Suspense, lazy } from "react";

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

const HomePageComponent: NextPage<HomePageComponentProps> = async (
  props: HomePageComponentProps
) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* <p>{props.locations ? props.locations[0].name : ""}</p> */}
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
