import Footer from "@/app/components/Base/Footer";
import MainNavbar from "../components/Base/MainNavbar";
import { Suspense } from "react";
import { HomepageApi } from "../api/homepage";

export default async function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getLocations = async (): Promise<IdNameQuery[]> => {
    try {
      const homepageApi = new HomepageApi({});
      const res = await homepageApi.getLocations();
      return res.data || [];
    } catch (error) {
      return [];
    }
  };
  const locations = await getLocations();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainNavbar locations={locations} />
      <section>{children}</section>
    </Suspense>
  );
}
