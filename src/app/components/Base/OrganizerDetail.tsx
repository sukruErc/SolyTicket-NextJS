import React from 'react'
import SelectedLocation from '../../assets/svg/select_location.svg'
import Image from 'next/image';

interface OrganizerDetailProps {
    organizerName: string;
    joined: string;
    city: string;
  }

const OrganizerDetail: React.FC<OrganizerDetailProps> = ({
    organizerName, 
    joined, 
    city, 
  }) => {
    return (
        <div className="my-3">

            <div className="card shadow-defaultShadow rounded-[20px]">
                <div className="flex flex-col sm:flex-row justify-between px-7 py-5 gap-3 ">
                    <div className="organizerinfo ">
                        <h5 className='font-bold text-base'>{organizerName}</h5>
                        <div className='font-normal text-sm'>
                            {joined}
                        </div>
                        <div className='mt-1 font-normal text-sm'>
                            <Image src={SelectedLocation} alt='' /> {city}
                        </div>
                    </div>
                    <div className='flex gap-3 self-center'>
                        <button className='whiteButton '>Contact</button>
                        <button className='BlueButton'>View</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default OrganizerDetail