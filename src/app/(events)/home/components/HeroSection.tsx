'use client'
import React from 'react'
import Image from 'next/image'
import CategoryImage from '@/app/assets/svg/iconamoon_category-light.svg'
import SelectLocation from '@/app//assets/svg/select_location.svg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const HeroSection = () => {
  const pathname = usePathname()
  return (
    <>
      <div className="HeroSection text-[#17161A]" >
        <div className="container mx-auto py-10 sm:py-16 md:py-32 ">
          <div className="HeroContent px-5 sm:px-0">
            <div className="HeroText">
              <h6 className='mb-3'>ALL THE FUN STARTS HERE</h6>
              <h1 className='pb-16'>Discover <span className="text-[#4E43F1]">Events</span> <br /> around you.</h1>
            </div>
            <div className="HeroSelects w-auto lg:w-9/12 mb-16 bg-[#ffffff] shadow-[0_0_30px_0_rgba(78, 67, 241, 0.08)]">


              <form className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-4 px-5 py-5 ">

                <div className="select1 col-span-2 ">
                  <label htmlFor="selectcategory border-none" className="block mb-2 text-base font-bold">What</label>

                  <div className="selectContainer relative">
                    <select id="selectcategory" className="block w-full pl-7 px-4 py-3 rounded border-none">

                      <option selected>Select City</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <Image className='mr-3 absolute top-[11px]' src={CategoryImage} alt="" />
                  </div>

                </div>
                <div className="select2 col-span-2 ">
                  <label htmlFor="selectlocation"  className="block mb-2 text-base font-bold">Where</label>

                  <div className="selectContainer relative">
                    <select id="selectlocation" className="block w-full pl-7 px-4 py-3 rounded border-none">

                      <option>Select City</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                    <Image className='mr-3 absolute top-[10px]' src={SelectLocation} alt="" />
                  </div>

                </div>
                <Link className={`link ${pathname === '/category' ? 'active' : ''} BlueButton col-span-2 md:col-span-1 max-h-fit justify-center self-center block sm:flex`} href="/category">
                  Search
                </Link>
                {/* <button className='BlueButton col-span-2 md:col-span-1 max-h-fit justify-center self-center block sm:flex'> Search</button> */}
              </form>



            </div>
            <div className="EventsNumbers grid  grid-cols-2 sm:grid-cols-3 w-auto lg:w-5/12 gap-8">
              <div className="NumberContent">
                <h3>250+</h3>
                <p>Upcoming Events</p>
              </div>
              <div className="NumberContent">
                <h3>5.4M+</h3>
                <p>Tickets Sold</p>
              </div>
              <div className="NumberContent">
                <h3>980k+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default HeroSection