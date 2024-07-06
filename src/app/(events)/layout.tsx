import Footer from "@/app/components/Base/Footer";
import MainNavbar from "../components/Base/MainNavbar";
import { HomepageApi } from "../api/homepage";
import { Suspense } from "react";

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

export default async function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const categoryItems = await getCategoryItems();
  const locations = await getLocations();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainNavbar locations={locations} />
      <section>{children}</section>
      <Footer />
    </Suspense>
  );
}
