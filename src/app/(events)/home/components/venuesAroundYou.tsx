import Image from 'next/image'
import React from 'react'
import LocalImage from "../../../../public/images/1327499.png"
import Vanue1 from "@/app/assets/images/vanue 1.png"
import Vanue2 from "@/app/assets/images/vanue 2.png"

const venuesAroundYou = () => {
  return (
    <div className="container px-5 mx-auto py-10 sm:py-16 md:py-32 text-[#17161A]">
      <h6>Discover the fun!</h6>
      <h3 className='mb-6' >Discover Venues Around You</h3>

      <div className="Venues">
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-4">
            <div className="relative h-full">
              <Image alt='' className=' relative block w-full h-full object-cover' src={Vanue1} />

              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className='text-white'>Blue Note Napa</h3>
                </div>
                <div className="location">
                  <h4 className='font-light'>1030 Main St, Napa, CA 94559, USA</h4>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="relative h-full">
              <Image alt='' className=' relative block w-full h-full object-cover' src={Vanue2} />

              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className='text-white'>Blue Note Napa</h3>
                </div>
                <div className="location">
                  <h4>1030 Main St, Napa, CA 94559, USA</h4>
                </div>

              </div>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="col-span-3 order-2 md:order-1">
            <div className="relative h-full">
              <Image alt='' className=' relative block w-full h-full object-cover' src={Vanue2} />

              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className='text-white'>Blue Note Napa</h3>
                </div>
                <div className="location">
                  <h4 className='font-light'>1030 Main St, Napa, CA 94559, USA</h4>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-4 order-1 md:order-2">
            <div className="relative h-full">
              <Image alt='' className=' relative block w-full h-full object-cover' src={Vanue1} />

              <div className="absolute left-11 bottom-11 z-10 text-white">
                <div className="title">
                  <h3 className='text-white'>Blue Note Napa</h3>
                </div>
                <div className="location">
                  <h4>1030 Main St, Napa, CA 94559, USA</h4>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default venuesAroundYou