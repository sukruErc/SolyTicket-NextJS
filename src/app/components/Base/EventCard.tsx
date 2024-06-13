import Image from 'next/image'
import React from 'react'

import CardDate from '../../assets/svg/cardDate.svg'
import CardTime from '../../assets/svg/cardTime.svg'
import SelectedLocation from '../../assets/svg/select_location.svg'

interface EventCardProps {
    cardImage: string;
    eventDateRange: string;
    eventTime: string;
    eventTitle: string;
    eventLocation: string;
    dull: Boolean;

  }

const EventCard: React.FC<EventCardProps> = ({
  cardImage, 
  eventDateRange, 
  eventTime, 
  eventTitle, 
  eventLocation,
  dull 
}) => {
  const opacityClass = dull ? 'opacity-20' : 'opacity-100';
  return (
    <>
    <div className="container mx-auto mb-2"> 

    <div className={`card shadow-EventCardShadow rounded-xl text-[#17161A] ${opacityClass}`}>

            <div className="cardImage w-full h-[200px] ">
                <Image className='rounded-t-xl h-[-webkit-fill-available] object-cover' src={cardImage} alt=''/>
            </div>
            <div className="cardContent p-5 ">
                <div className="dateTime flex font-normal text-[9px]">
                    <div className="date ">
                        <Image className='mr-1'  alt='' src={CardDate}/> 
                        {eventDateRange}
                    </div>
                    <div className='h-3 w-[0.5px] bg-[#4E43F1] mx-2 opacity-35'></div>
                    <div className="time ">
                        <Image className='mr-1' alt='' src={CardTime}/> 
                        {eventTime}
                    </div>
                </div>
                <div className="title font-bold text-[16px] my-2">
                  {eventTitle}
                </div>
                <div className="location font-normal text-[12px]">
                    <Image className='mr-1' alt='' src={SelectedLocation}/> 
                    {eventLocation}
                </div>

            </div>
        </div>
    </div>

    </>
  )
}

export default EventCard