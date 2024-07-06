import Footer from "@/app/components/Base/Footer";
import MainNavbar from "../components/Base/MainNavbar";
import { Suspense } from "react";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainNavbar />
      <section>{children}</section>
    </Suspense>
  );
}
