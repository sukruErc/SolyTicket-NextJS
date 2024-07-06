import { NextPage } from "next";
import { Suspense, lazy } from "react";

const HeroSection = lazy(
  () => import("@/app/(events)/home/components/HeroSection")
);
const VenuesAroundYou = lazy(
  () => import("@/app/(events)/home/components/venuesAroundYou")
);
const UpcommingEvents = lazy(
  () => import("@/app/(events)/home/components/UpcommingEvents")
);
const Guides = lazy(() => import("@/app/(events)/home/components/guides"));
const Footer = lazy(() => import("@/app/components/Base/Footer"));
const EventCardSwiper = lazy(
  () => import("@/app/(events)/home/components/EventCardSwiper")
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
