import React from "react";
import { EventsCardData, CollectionData } from "@/app/assets/data/swiperData";
import Image from "next/image";
import { RadioGroup, Radio } from "@nextui-org/react";
interface PurchasePageProps {
  params: {
    eventId: string;
  };
}

const payment = ({ params }: PurchasePageProps) => {
  return (
    <>
      <div className="container mx-auto md:mt-16">
        <div className="grid md:grid-cols-2 ">
          <div className="p-10">
            <h5 className="borderBottom pb-5">Payment</h5>
            <div className="my-5">
              <h6 className="mb-2">Pay with:</h6>
              <input
                className="mr-1"
                type="radio"
                id="card"
                value={"card"}
                name="fav_language"
              />
              <label className="mr-4" htmlFor="card">
                Card
              </label>
              <input
                className="mr-1"
                type="radio"
                id="bank"
                value={"bank"}
                name="fav_language"
              />
              <label className="mr-4" htmlFor="bank">
                Bank
              </label>
              <input
                className="mr-1"
                type="radio"
                id="transfer"
                value={"transfer"}
                name="fav_language"
              />
              <label className="mr-4" htmlFor="transfer">
                Transfer
              </label>
            </div>
            <div className="my-5">
              <h6>Card Number</h6>
              <input
                type="text"
                className="newInput"
                placeholder="1234  5678  9101  1121"
              />
            </div>
            <div className="grid grid-cols-2 gap-5 my-5">
              <div>
                <h6>Expiration Date</h6>
                <input type="text" className="newInput" placeholder="MM/YY" />
              </div>
              <div>
                <h6>CVV</h6>
                <input type="text" className="newInput" placeholder="123" />
              </div>
            </div>
            <div className="my-5 mb-7">
              <input className="mr-2" type="checkbox" id="saveDetails" />
              <label className="text-[#565656]" htmlFor="saveDetails">
                Save card details
              </label>
            </div>
            <button className="BlueButton w-full">Pay USD 59.28</button>
            <p className="my-5 text-[#565656]">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </p>
          </div>
          <div className="p-10 bg-[#4E43F10D]">
            <h5 className="borderBottom pb-5">Order Summary</h5>
            <div className="my-5">
              <h6 className="mb-2 w-full md:w-[50%] ">
                2 for 1 Deal! Royal Canadian International Circus - Calgary
              </h6>
              <div className="grid grid-cols-6 gap-4 borderBottom border-[#4E43F1] border-opacity-50 pb-5">
                <div className="col-start-1 col-auto text-[#4E43F1]">
                  $49.80
                </div>
                <div className="col-end-7 col-auto max-w-max">Qty: 2</div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex items-baseline justify-between self-center gap-4 borderBottom border-opacity-50 pb-7">
                <div className="w-8/12">
                  <input
                    type="text"
                    className="newInput border-[#4E43F1] border-opacity-50 bg-white"
                    placeholder="Gift or discount code"
                  />
                </div>
                <div className="w-auto">
                  <button className="BlueButton max-w-full p-[auto]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex items-baseline justify-between self-center gap-4 pb-2 subHeadingText">
                <div className="w-auto">Subtotal</div>
                <div className="w-auto">$49.80</div>
              </div>
              <div className="flex items-baseline justify-between self-center gap-4 borderBottom border-opacity-50 pb-5 subHeadingText">
                <div className="w-auto ">Shipping</div>
                <div className="w-auto">$7.24</div>
              </div>
            </div>
            <div className="my-5">
              <div className="flex justify-between self-center gap-4 pb-2 items-center">
                <div className="w-auto ">
                  <div className="subHeadingText">Total</div>
                  <div className="font-normal text-[14px] text-[#565656]">
                    Including $2.24 in taxes
                  </div>
                </div>
                <div className="auto text-[32px] subHeadingtext">$59.28</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default payment;
