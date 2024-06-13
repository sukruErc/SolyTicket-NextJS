import Image from 'next/image'
import React from 'react'
import AvatarWomen from '@/app/assets/images/woman avatar.png'
import EditIcon from '@/app/assets/svg/Edit.svg'


const profile = () => {
    return (
        <>
            <div className="container mx-auto flex justify-center px-5 my-5 sm:my-20">
                <div className='shadow-ProfileShadow rounded-[26px] w-full  md:w-9/12 lg:w-8/12 xl:w-6/12'>
                    <div className='px-6 sm:px-16 py-20 text-center mx-auto'>
                            <div className='w-fit mx-auto relative mb-5'>
                                <Image src={AvatarWomen} alt='' className='' />
                                <Image src={EditIcon} alt='' className='absolute bottom-0 right-0' />
                            </div>
                            <h5>Shijra Hassan</h5>

                        <form action="" className='text-start my-8'>

                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="UserName" className="form-label">Name</label>
                                </h6>

                                <input type="text" className="newInput" id="UserName" aria-describedby="emailHelp" placeholder='Shijra Hassan' />

                            </div>
                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="EmailAddress" className="form-label">Email Address</label>
                                </h6>
                                <input type="email" className="newInput" id="EmailAddress" aria-describedby="emailHelp" placeholder='Email Address' />

                            </div>
                            <div className='my-8 flex flex-col md:flex-row gap-4 '>
                                <button className='whiteButton w-full md:m-0' >Change Password</button>
                                <button className='BlueButton w-full' >Save Changes</button>
                            </div>
                        </form>/
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile