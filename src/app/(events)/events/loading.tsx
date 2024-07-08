import EventCardLoader from "@/app/components/Base/page/EvetCardLoader";
import PageTitle from "@/app/components/Base/PageTitle";
import LogoFiller from "@/app/components/Base/Spinner/LogoFiller";

export default function Loading() {
  const homePageValues: HomepageValuesResponse = {
    upcomingEventsCount: 0,
    ticketSoldCount: 0,
    totalCustomerCount: 0,
  };
  const categoryItems: IdNameQuery[] = [];
  const locations: IdNameQuery[] = [];
  const recentEvents: Event[] = [];
  const categoryForGuide: CategoryWithCount[] = [];
  const locationsForHomepage: LocationsForHomepage[] = [];

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
    <div style={pageStyle}>
      {/* <div style={overlayStyle}> */}
      <PageTitle title={``} />
      <div className="container mx-auto px-2 pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader /> <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          <EventCardLoader />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
