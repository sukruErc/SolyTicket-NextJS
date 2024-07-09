import Footer from "@/app/components/Base/Footer";
import MainNavbar from "../components/Base/MainNavbar";
import { Suspense } from "react";
import { HomepageApi } from "../api/homepage";
import Navbar from "../components/Organizer/Navbar";

export default async function OrganizerLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <section>{children}</section>
    </Suspense>
  );
}
