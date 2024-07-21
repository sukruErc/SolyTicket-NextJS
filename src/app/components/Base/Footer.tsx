import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LocationIcon from "../../assets/svg/location.svg";
import PhoneIcon from "../../assets/svg/phoneIcon.svg";
import MailIcon from "../../assets/svg/icon_mail.svg";
import FacebookIcon from "../../assets/svg/facebookIcon.svg";
import TwitterIcon from "../../assets/svg/twitterIcon.svg";
import YoutubeIcon from "../../assets/svg/youtubeIcon.svg";
import InstagramIcon from "../../assets/svg/instagramIcon.svg";
import Link from "next/link";

export default function App() {
  return (
    <footer className="bg-[#17161A] text-center lg:text-left mt-10 sm:mt-20 text-white">
      <div className=" mx-10 py-10 text-left">
        <div className="grid-1 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-sm:text-start">
          {/* <!-- TW Elements section --> */}
          <div className="">
            <h5 className="mb-4 md:flex items-center text-white justify-center font-semibold uppercase md:justify-start">
              Helpful Links
            </h5>
            <p className="mb-4">
              <Link
                href={
                  "https://medium.com/@solyticket/nft-biletleme-b7306601d703"
                }
                className="text-white dark:text-neutral-200"
                target="_blank"
              >
                NFT Bilet
              </Link>
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="">
            <h5 className="mb-4 md:flex justify-center text-white font-semibold uppercase md:justify-start">
              Explore
            </h5>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="">
            <h5 className="mb-4 md:flex justify-center text-white font-semibold uppercase md:justify-start">
              About us
            </h5>
            <p className="mb-4">
              <Link
                href={"https://medium.com/@solyticket/solyticket-b1b2aedd6c38"}
                className="text-white dark:text-neutral-200"
                target="_blank"
              >
                Solyticket
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className="">
            <h5 className="mb-4 md:flex justify-center text-white font-semibold uppercase md:justify-start">
              Contact US
            </h5>
            <p className="mb-4 md:flex items-center justify-center md:justify-start">
              <Image className="mr-3" src={LocationIcon} alt="" />
              111 Wall Street, USA, New York
            </p>
            <p className="mb-4 md:flex items-center justify-center md:justify-start">
              <Image className="mr-3" src={PhoneIcon} alt="" />
              Phone: (123) 456-7890
            </p>
            <p className="mb-4 md:flex items-center justify-center md:justify-start">
              <Image className="mr-3" src={MailIcon} alt="" />
              solyticket@gmail.com
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 pb-10">
          <div className="grid md:grid-cols-5 border-opacity-25 lg:border-b-[1px] max-md:my-10">
            <div className="flex items-center justify-evenly md:justify-between col-span-2">
              <Image src={FacebookIcon} alt="Follow us on FaceBook" />
              <Image src={TwitterIcon} alt="Follow us on FaceBook" />
              <Image src={YoutubeIcon} alt="Follow us on FaceBook" />
              <Image src={InstagramIcon} alt="Follow us on FaceBook" />
            </div>
          </div>

          <div className="grid lg:grid-cols-7">
            <div className="md:col-start-3 col-span-5">
              <h5 className="mb-4">Newsletter</h5>
              <div className="relative">
                <input
                  className="border-[1px] outline-none border-white rounded-l-lg px-5 py-3 pr-28 bg-transparent w-full"
                  type="text"
                  placeholder="E-posta Adresinizi Girin"
                />
                <button className="border-none outline-none rounded-r-lg px-6 py-[17px] border-[1px] border-white bg-white text-black font-medium text-xs absolute top-0 right-[-5px]">
                  ABONE OL
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-white text-base">
          Copyright © 2024 Solyticket. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
