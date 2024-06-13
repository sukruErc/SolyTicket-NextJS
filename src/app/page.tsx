import React from 'react';
import HeroSection from '@/app/(events)/home/components/HeroSection'
import VenuesAroundYou from '@/app/(events)/home/components/venuesAroundYou'
import UpcommingEvents from '@/app/(events)/home/components/UpcommingEvents'
import Guides from '@/app/(events)/home/components/guides'
import { MainNavbar } from "@/app/components/Base/MainNavbar"
import Footer from "@/app/components/Base/Footer"
import EventCardSwiper from './(events)/home/components/EventCardSwiper';


const HomePage = () => {
  return(
    <>
      <MainNavbar />
      <HeroSection />
      <UpcommingEvents slidesPerView={1}/>
      <Guides/>
      <EventCardSwiper/>
      <VenuesAroundYou/>
      <Footer/>
    </>

  ) 
};

export default HomePage;