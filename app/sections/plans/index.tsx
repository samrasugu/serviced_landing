"use client";

import React from "react";
import FreePlan from "../../../public/assets/icons/free-plan.png";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";

export function PlansSection() {
  return (
    <div className="py-28 px-4 md:px-16">
      <h1 className="text-primary-black items-center font-lightbold text-center text-4xl md:text-4xl">
        Choose Your Plan
      </h1>
      <p className="text-primary-grey text-xl text-center py-10 md:px-40">
        Let{"'"}s choose the package that is best for you and explore it happily
        and cheerfully
      </p>
      <div className="flex flex-col md:flex-row justify-evenly gap-10">
        <div className="flex flex-col border items-center border-gray-400 rounded-xl p-24 gap-4">
          <Image src={FreePlan} alt="Free Plan" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Free Plan
          </h1>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <h1 className="text-primary-black mt-6 text-xl font-lightbold">
            Free
          </h1>
          <button className="py-2 px-16 text-orange-500 text-base bg-white border-2 font-bold border-primary-orange rounded-2xl hover:scale-105 duration-500">
            Select
          </button>
        </div>
        <div className="flex flex-col border-4 items-center border-primary-orange rounded-xl p-24 gap-4">
          <Image src={FreePlan} alt="Free Plan" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Standard Plan
          </h1>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <h1 className="text-primary-black mt-6 text-xl font-lightbold">
            $9 <span className="text-primary-grey text-lg">/month</span>
          </h1>
          <button className="py-2 px-16 text-white text-base bg-orange-500 rounded-2xl hover:scale-105 duration-500">
            Selected
          </button>
        </div>
        <div className="flex flex-col border items-center border-gray-400 rounded-xl p-24 gap-4">
          <Image src={FreePlan} alt="Free Plan" />
          <h1 className="text-primary-black text-xl font-lightbold">
            Premium Plan
          </h1>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <div className="flex flex-row items-center gap-1">
            <BsCheckLg className="text-green-700 font-bold text-xl" />
            <p className="text-primary-black">Lorem, ipsum dolor.</p>
          </div>
          <h1 className="text-primary-black mt-6 text-xl font-lightbold">
            $15 <span className="text-primary-grey text-lg">/month</span>
          </h1>
          <button className="py-2 px-16 mt-6 text-orange-500 text-base bg-white border-2 border-primary-orange rounded-2xl hover:scale-105 duration-500">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
