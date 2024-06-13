import { MainNavbar } from "@/app/components/Base/MainNavbar"
import Footer from "@/app/components/Base/Footer"

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNavbar/>
      <section>{children}</section>
    </>
  )
}