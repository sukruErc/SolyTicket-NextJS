'use client'
import React from 'react'
import Logo from "@/app/assets/svg/solyticket_logo.svg";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const signup = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="container mx-auto flex justify-center px-5 my-5 sm:my-20">
                <div className='bg-[#F6F6FE] rounded-[26px] w-full  md:w-9/12 lg:w-6/12'>
                    <div className='px-6 sm:px-16 py-20 text-center mx-auto'>
                        <div>
                            <Image src={Logo} alt='' className='block' />
                        </div>
                        <h5>Register Your Account</h5>

                        <form action="" className='text-start my-8'>
                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="FullName" className="form-label">Full Name</label>
                                </h6>
                                <input type="text" className="newInput" id="FullName" aria-describedby="" placeholder='Full Name' />

                            </div>
                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="EmailAddress" className="form-label">Email</label>
                                </h6>
                                <input type="email" className="newInput" id="EmailAddress" aria-describedby="" placeholder='Username or email' />

                            </div>
                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="LoginPassword" className="form-label">Password</label>
                                </h6>
                               
                                <input type="password" className="newInput" id="LoginPassword" aria-describedby="emailHelp" placeholder='Password' />

                            </div>
                            <div className="mb-5">
                                <h6>
                                    <label htmlFor="ConfirmPassword" className="form-label">Confirm Password</label>
                                </h6>
                               
                                <input type="password" className="newInput" id="ConfirmPassword" aria-describedby="emailHelp" placeholder='Password' />

                            </div>
                            <div className='my-8'>
                                <button className='BlueButton w-full' >Sign Up</button>
                            </div>
                        </form>
                            <div>
                            <p>Don’t Have an Account? <span className='font-bold'><Link className={`link ${pathname === '/login' ? 'active' : ''}`} href="/login">
                                Login
                            </Link></span></p>
                                
                            </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default signup