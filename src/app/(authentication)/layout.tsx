import Footer from "@/app/components/Base/Footer";
import MainNavbar from "../components/Base/MainNavbar";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainNavbar />
      <section>{children}</section>
    </>
  );
}
