
"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { ImagesData } from '@/app/assets/data/swiperData'
import DateIcon from '@/app/assets/svg/date.svg'
import LocationIcon from '@/app/assets/svg/locationIconWhite.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import viewAllIcon from '@/app/assets/svg/ViewAllIcon.svg'
import { usePathname } from 'next/navigation'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSwiper } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

interface SwiperEventsProps {
    slidesPerView: number;

}

const SwiperEvents: React.FC<SwiperEventsProps> = ({ slidesPerView }) => {
    const swiper = useSwiper();
    const pathname = usePathname()
    return (

        <div className="container mx-auto px-5 py-10 sm:py-16 md:py-32 text-white">
            <h6>Discover the fun!</h6>
            <h3 className='mb-6' >Upcoming Events</h3>

            <div className="myswiper">
                <Link className={`link ${pathname === '/category/eventdetail' ? 'active' : ''}`} href="/category/eventdetail">
                    <Swiper className='mb-3'
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                        {ImagesData.map((image, index) => {
                            return <SwiperSlide key={index}>

                                <Image alt='' className=' relative block h-[426px] w-full ' src={image.src} />

                                <div className="absolute left-11 bottom-11 UpEventContent">
                                    <div className="price">
                                        <h4>${image.minCost} - ${image.maxCost}</h4>
                                    </div>
                                    <div className="title">
                                        <h3 className='text-white'>{image.title}</h3>
                                    </div>
                                    <div className="flex date_location justify-between w-[110%]">
                                        <div className="date">
                                            <h4><Image alt='' className='inline-block mr-2' src={DateIcon} />{image.date}</h4>
                                        </div>
                                        <div className="location">
                                            <h4><Image alt='' className='inline-block mr-2' src={LocationIcon} />{image.location}</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>;

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
    );
};

export default SwiperEvents