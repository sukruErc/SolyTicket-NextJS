
'use client'
 
import { usePathname } from 'next/navigation'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EventsCardData } from '../../../assets/data/swiperData'
import EventCard from '../../../components/Base/EventCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import viewAllIcon from '@/app/assets/svg/ViewAllIcon.svg'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

export default () => {
  const pathname = usePathname()
  const swiper = useSwiper();

  return (

    <>
      <div className="container px-5 mx-auto py-10 sm:py-16 md:py-32 ">
        <h6>Discover the fun!</h6>
        <h3 className='mb-6' >Recent Events</h3>

        <div className="myswiper">
          <Link className={`link ${pathname === '/category/eventdetail' ? 'active' : ''}`} href="/category/eventdetail">
            <Swiper className='mb-3'
              breakpoints={{
                200: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                576: {

                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {

                  slidesPerView: 3,
                  spaceBetween: 20

                },
                1026: {

                  slidesPerView: 4,
                  spaceBetween: 20

                },
              }}
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={4}
              navigation

              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {EventsCardData.map((cardData, index) => {
                return (
                  <SwiperSlide key={index}>
                    <EventCard cardImage={cardData.src} eventDateRange={cardData.date} eventTime={cardData.time} eventTitle={cardData.title}
                      eventLocation={cardData.location} />

                  </SwiperSlide>
                )

              })}
            </Swiper>
          </Link>
          <div className='text-end'>
                <Link className={`link ${pathname === '/category' ? 'active' : ''} bg-none text-[#4E43F1] text-[30px] font-medium`} href="/category">
                View All <Image alt='' className='ml-3 inline-block relative top-[-2px]' src={viewAllIcon}/>
                </Link>

                </div>

        </div>
      </div>
    </>
  );
};