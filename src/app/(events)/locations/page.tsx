
'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import PageTitle from '@/app/components/Base/PageTitle'
import React from 'react'
import { eventLocations } from '@/app/assets/data/swiperData'
import Image from 'next/image'

const location = () => {
    const pathname = usePathname()
    return (
        <>
            <PageTitle title='Events Location' />
            <div className="container mx-auto px-2 ">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {eventLocations.map((location, index) => {
                        return (
                            <Link className={`link ${pathname === '/locations/organizers' ? 'active' : ''}`} href="/locations/organizers">
                             <div className='relative'>
                                <Image className='w-full' src={location.src} alt=''/>
                                <h3 className='absolute bottom-8 left-8 text-white font-semibold text-[26px]'>California</h3>
                            </div>
                          </Link>
                           
                        );
                    })}
                </div>
            </div>

        </>

    )
}

export default location